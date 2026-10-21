# ElevenLabs 목소리로 "상대방이 하는 말(them)"만 다시 만들어요 — GitHub Actions에서 돌아가요 (.github/workflows/voices_eleven.yml)
# job=sample: audio/_samples/eleven/ 에 사람마다 한 문장씩만 (크레딧 300 정도)
# job=full  : audio/v/<사람>/ 안의 해당 문장 mp3를 덮어써요. 이미 한 문장은 tools/eleven_done.json 에 적어 두고 다음에 건너뛰어요.
# 크레딧이 떨어지거나 목소리를 쓸 수 없으면 그 자리에서 멈추고, 못 만든 문장은 기존 Microsoft 목소리가 그대로 남아요.
import json, os, re, subprocess, sys, tempfile, threading, time, urllib.error, urllib.request
from concurrent.futures import ThreadPoolExecutor

REPO = sys.argv[1]
JOB = os.environ.get("JOB") or "sample"
KEY = (os.environ.get("ELEVENLABS_API_KEY") or "").strip()
BASE = os.environ.get("ELEVEN_BASE", "https://api.elevenlabs.io")
CFG = json.load(open(os.path.join(REPO, "tools", "eleven_voices.json"), encoding="utf-8"))
DONE_PATH = os.path.join(REPO, "tools", "eleven_done.json")

if not KEY:
    print("ELEVENLABS_API_KEY 가 없어요. 저장소 Settings > Secrets and variables > Actions 에 등록해 주세요.")
    sys.exit(1)

def slug(t): return re.sub(r"[^a-z0-9]+", "-", t.lower()).strip("-")[:80]

raw = open(os.path.join(REPO, "data.js"), encoding="utf-8").read()
data = json.loads(raw[raw.index("{"): raw.rindex("}") + 1])
PEOPLE = CFG["people"]
lines = []  # (person, slug, text)
for ph in data["phrases"]:
    if ph["who"] == "them" and ph.get("spk") in PEOPLE:
        lines.append((ph["spk"], slug(ph["en"]), ph["en"]))

done = json.load(open(DONE_PATH, encoding="utf-8")) if os.path.exists(DONE_PATH) else {}

AF = ("silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.03,areverse,"
      "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.03,areverse,"
      "adelay=80:all=1,apad=pad_dur=0.12,loudnorm=I=-16:TP=-1.5:LRA=11")

class Stop(Exception): pass          # 크레딧 소진·키 오류: 전부 멈춤
class VoiceBlocked(Exception): pass  # 이 목소리는 이 요금제에서 못 씀: 그 사람만 건너뜀

lock = threading.Lock()
stop_reason = []
blocked = {}
used_chars = [0]
ok_count = [0]
fails = []

def call(text, voice_id, model):
    url = f"{BASE}/v1/text-to-speech/{voice_id}?output_format=mp3_44100_128"
    body = json.dumps({"text": text, "model_id": model, "voice_settings": CFG["settings"]}).encode()
    req = urllib.request.Request(url, data=body, headers={"xi-api-key": KEY, "Content-Type": "application/json", "Accept": "audio/mpeg"})
    with urllib.request.urlopen(req, timeout=90) as r:
        return r.read()

def synth(text, person):
    voice_id = PEOPLE[person]["voice_id"]
    models = [CFG["model"]] + CFG.get("fallback_models", [])
    mi = 0
    for attempt in range(7):
        if stop_reason: raise Stop(stop_reason[0])
        try:
            return call(text, voice_id, models[mi])
        except urllib.error.HTTPError as e:
            msg = e.read()[:400].decode("utf-8", "ignore")
            low = msg.lower()
            if e.code == 429:
                time.sleep(3 + attempt * 5); continue
            if e.code == 401 and "quota" in low:
                raise Stop("크레딧(quota)을 다 썼어요: " + msg[:120])
            if e.code == 401:
                raise Stop("API 키가 잘못됐어요: " + msg[:120])
            if e.code in (402, 403) or "paid_plan" in low or "library" in low:
                raise VoiceBlocked(msg[:160])
            if e.code in (400, 404, 422) and "model" in low and mi + 1 < len(models):
                mi += 1; continue
            if e.code >= 500:
                time.sleep(2 + attempt * 3); continue
            raise RuntimeError(f"HTTP {e.code}: {msg[:160]}")
        except (urllib.error.URLError, TimeoutError, ConnectionError) as e:
            time.sleep(2 + attempt * 3)
    raise RuntimeError("재시도 실패")

def to_mp3(raw_mp3, tempo, dst):
    tempo = float(tempo)
    af = (f"atempo={tempo}," if abs(tempo - 1.0) > 0.01 else "") + AF
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    with tempfile.TemporaryDirectory() as td:
        src = os.path.join(td, "in.mp3"); out = os.path.join(td, "out.mp3")
        open(src, "wb").write(raw_mp3)
        p = subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", src, "-af", af, "-ac", "1", "-ar", "24000",
                            "-codec:a", "libmp3lame", "-b:a", "48k", out])
        if p.returncode != 0 or os.path.getsize(out) < 500:
            raise RuntimeError("ffmpeg 변환 실패")
        os.replace(out, dst)  # 성공했을 때만 기존 파일을 바꿔요

def one(job):
    person, s, text, dst, track, dst_slow = job
    if stop_reason or person in blocked: return
    with lock:
        if used_chars[0] + len(text) > CAP:
            if not stop_reason: stop_reason.append(f"이번 실행 한도({CAP}자)에 도달했어요")
            return
        used_chars[0] += len(text)
    try:
        audio = synth(text, person)
        tempo = float(PEOPLE[person].get("tempo", 1.0))
        to_mp3(audio, tempo, dst)
        if dst_slow:
            to_mp3(audio, tempo * float(PEOPLE[person].get("slow_factor", 0.7)), dst_slow)  # 천천히 듣기: 크레딧 없이 속도만 늦춰요
        with lock:
            ok_count[0] += 1
            if track: done.setdefault(person, []).append(s)
    except Stop as e:
        with lock:
            if not stop_reason: stop_reason.append(str(e))
    except VoiceBlocked as e:
        with lock:
            if person not in blocked:
                blocked[person] = str(e)
                print(f"  [{person}] 이 목소리는 지금 요금제로 쓸 수 없어요 -> 건너뛰어요: {e}", flush=True)
    except Exception as e:
        with lock: fails.append((person, s, repr(e)[:200]))

def resolve_voices():
    # 무료 요금제는 라이브러리 목소리를 API로 못 써요. My Voices 에 있는 기본 목소리를 이름으로 찾아요.
    req = urllib.request.Request(f"{BASE}/v1/voices", headers={"xi-api-key": KEY})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            vs = json.loads(r.read()).get("voices", [])
    except Exception as e:
        print("목소리 목록을 못 가져왔어요:", repr(e)[:200], flush=True)
        vs = []
    by = {}
    for v in vs:
        key = re.split(r"\s+[-\u2013\u2014]\s+", v.get("name", ""))[0].strip().lower()
        by.setdefault(key, v["voice_id"])
    print("계정 목소리:", sorted(by)[:40], flush=True)
    for person, cfg in PEOPLE.items():
        if cfg.get("voice_id"): continue
        vid = by.get(cfg.get("voice_name", "").lower())
        if vid:
            cfg["voice_id"] = vid
            print(f"  [{person}] -> {cfg['voice_name']}", flush=True)
        else:
            blocked[person] = f"계정(My Voices)에 '{cfg.get('voice_name')}' 목소리가 없어요"
            print(f"  [{person}] 건너뜀: {blocked[person]}", flush=True)

resolve_voices()

CAP = CFG["max_chars_per_run"]
jobs = []
if JOB == "std":
    # 기본 목소리(내가 하는 말·대답 예시 등)를 우선순위대로 만들어요. 한도에 닿으면 멈추고 다음 실행에서 이어가요.
    SC = CFG["std"]; PEOPLE["std"] = SC; CAP = SC["max_chars_per_run"]
    cats = {
        "me": [p["en"] for p in data["phrases"] if p["who"] != "them"],
        "reply": [p.get("reply") for p in data["phrases"]],
        "them_std": [p["en"] for p in data["phrases"] if p["who"] == "them" and p.get("spk") in ("std", "", None)],
        "words": [p[k] for p in data["pairs"] for k in ("a", "b")],
        "examples": [p[k] for p in data["pairs"] for k in ("aEx", "bEx")],
    }
    seen = set(done.get("std", []))
    for cat in SC["priority"]:
        for t in cats[cat]:
            if not t: continue
            sl = slug(t)
            if sl in seen: continue
            seen.add(sl)
            jobs.append(("std", sl, t, os.path.join(REPO, "audio", f"{sl}.mp3"), True, os.path.join(REPO, "audio", f"{sl}.slow.mp3")))
elif JOB == "sample":
    seen = set()
    for person, s, text in lines:
        if person in seen: continue
        seen.add(person)
        jobs.append((person, s, text, os.path.join(REPO, "audio", "_samples", "eleven", f"{person}.mp3"), False, None))
else:
    for person, s, text in lines:
        if s in set(done.get(person, [])): continue
        jobs.append((person, s, text, os.path.join(REPO, "audio", "v", person, f"{s}.mp3"), True, None))

print(f"job={JOB} 만들 문장 {len(jobs)}개, 글자수 약 {sum(len(j[2]) for j in jobs)}", flush=True)
# 무료 요금제는 동시 요청 2개까지라서 2개씩만 보내요
with ThreadPoolExecutor(max_workers=2) as ex:
    list(ex.map(one, jobs))

if JOB in ("full", "std"):
    for k in done: done[k] = sorted(set(done[k]))
    json.dump(done, open(DONE_PATH, "w", encoding="utf-8"), ensure_ascii=False, indent=0)
print(f"완료 {ok_count[0]}개, 사용 글자 약 {used_chars[0]}, 실패 {len(fails)}, 막힌 목소리 {list(blocked)}", flush=True)
if stop_reason: print("멈춘 이유:", stop_reason[0], flush=True)
for f in fails[:15]: print("  실패", f, flush=True)
