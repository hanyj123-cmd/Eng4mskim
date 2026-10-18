# Microsoft Edge 음성(무료)으로 목소리 mp3 만들기 — GitHub Actions에서 돌아가요 (.github/workflows/voices.yml)
# job=sample: audio/_samples/ 에 사람마다 몇 문장만  /  job=full: 전체 (기본 목소리 audio/, 다른 사람 audio/v/<id>/)
import asyncio, json, os, re, subprocess, sys, tempfile, time
import edge_tts
REPO = sys.argv[1]
CFG = json.load(open(os.path.join(REPO, "tools", "edge_voices.json"), encoding="utf-8"))
JOB = os.environ.get("JOB") or CFG.get("job", "sample")
def slug(t): return re.sub(r"[^a-z0-9]+", "-", t.lower()).strip("-")[:80]
raw = open(os.path.join(REPO, "data.js"), encoding="utf-8").read()
data = json.loads(raw[raw.index("{"): raw.rindex("}") + 1])
sets = {"them": {}, "me": {}, "words": {}}
for ph in data["phrases"]:
    sets["them" if ph["who"] == "them" else "me"][slug(ph["en"])] = ph["en"]
for p in data["pairs"]:
    for k in ("a", "b"):
        sets["words"][slug(p[k])] = p[k]
# 기본 목소리로 읽을 전체 문장 (make_audio.py 와 같은 목록)
std_texts = {}
for p in data["pairs"]:
    for k in ("a", "b", "aEx", "bEx"):
        if p[k]: std_texts[p[k]] = 1
for ph in data["phrases"]:
    std_texts[ph["en"]] = 1
    if ph.get("reply"): std_texts[ph["reply"]] = 1
for m in data["missions"]:
    mm = re.search(r"'(.+?)'(?=[을를은는이가도\s.,]|$)", m)
    if mm: std_texts[re.sub(r"_{2,}", "the station", mm.group(1))] = 1
for t in ["Hello, how are you today?", "Good morning", "Good afternoon", "Good evening"]: std_texts[t] = 1

jobs = []  # (text, voice, rate, pitch, out)
S = CFG["std"]
if JOB == "sample":
    sample = ["Hi there, what can I get for you?", "Did you find everything okay?", "Are you allergic to any medication?", "ship", "sheep", "fan", "pan"]
    for t in sample:
        jobs.append((t, S["voice"], S["rate"], S["pitch"], f"audio/_samples/std/{slug(t)}.mp3"))
    for pp in CFG["people"]:
        if pp["id"] == "std": continue
        for t in sample[:3]:
            jobs.append((t, pp["voice"], pp["rate"], pp["pitch"], f"audio/_samples/{pp['id']}/{slug(t)}.mp3"))
else:
    for t in std_texts:
        jobs.append((t, S["voice"], S["rate"], S["pitch"], f"audio/{slug(t)}.mp3"))
        jobs.append((t, S["voice"], S["slow"], S["pitch"], f"audio/{slug(t)}.slow.mp3"))
    for pp in CFG["people"]:
        if pp["id"] == "std": continue
        for st in pp["sets"]:
            for s, t in sets[st].items():
                jobs.append((t, pp["voice"], pp["rate"], pp["pitch"], f"audio/v/{pp['id']}/{s}.mp3"))
print("job", JOB, "files", len(jobs), flush=True)
AF = ("silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.03,areverse,"
      "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.03,areverse,"
      "adelay=80:all=1,apad=pad_dur=0.12,loudnorm=I=-16:TP=-1.5:LRA=11")
fails = []
async def one(sem, j, tmpd):
    text, voice, rate, pitch, out = j
    dst = os.path.join(REPO, out)
    async with sem:
        for attempt in range(5):
            try:
                tmp = os.path.join(tmpd, slug(out) + ".mp3")
                await edge_tts.Communicate(text, voice, rate=rate, pitch=pitch).save(tmp)
                os.makedirs(os.path.dirname(dst), exist_ok=True)
                p = await asyncio.create_subprocess_exec("ffmpeg", "-y", "-loglevel", "error", "-i", tmp, "-af", AF, "-ac", "1", "-ar", "24000",
                                                         "-codec:a", "libmp3lame", "-b:a", "48k", dst)
                await p.wait()
                os.remove(tmp)
                if p.returncode == 0: return
            except Exception as e:
                err = str(e)
                await asyncio.sleep(2 + attempt * 3)
        fails.append((out, voice))
async def main():
    sem = asyncio.Semaphore(6)
    t0 = time.time()
    with tempfile.TemporaryDirectory() as tmpd:
        tasks = [one(sem, j, tmpd) for j in jobs]
        done = 0
        for f in asyncio.as_completed(tasks):
            await f; done += 1
            if done % 200 == 0: print(f"  {done}/{len(jobs)} {time.time() - t0:.0f}s", flush=True)
    print("done", len(jobs) - len(fails), "fails", len(fails), fails[:20], flush=True)
asyncio.run(main())
# 실패한 사람 목소리는 manifest 에서 빼요 (앱이 기본 목소리로 대신 읽어요)
if JOB == "full":
    bad = {}
    for out, voice in fails:
        m = re.match(r"audio/v/([^/]+)/(.+)\.mp3", out)
        if m: bad.setdefault(m.group(1), set()).add(m.group(2))
    mpath = os.path.join(REPO, "audio", "manifest.json")
    man = {"voice": S["voice"], "items": sorted(slug(t) for t in std_texts)}
    man["people"] = [{"id": p["id"], "label": p["label"], "desc": p["desc"], "sets": p["sets"]} for p in CFG["people"]]
    man["sets"] = {st: sorted(v) for st, v in sets.items()}
    man["missing"] = {k: sorted(v) for k, v in bad.items()}
    json.dump(man, open(mpath, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
json.dump(fails, open(os.path.join(REPO, "audio", "_fails.json" if JOB == "full" else "_samples/_fails.json"), "w"))
