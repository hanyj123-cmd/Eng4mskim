# 여러 사람 목소리 mp3 만들기 (Kokoro).  python3 make_voices.py <repo> <models> <tmp>
# audio/v/<사람id>/<slug>.mp3 를 만들고 audio/manifest.json 에 people / sets 를 적어요.
import json, os, re, subprocess, sys, time
import numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
REPO, MODELS, TMP = sys.argv[1:4]
os.makedirs(TMP, exist_ok=True)
def slug(t): return re.sub(r"[^a-z0-9]+", "-", t.lower()).strip("-")[:80]
raw = open(os.path.join(REPO, "data.js"), encoding="utf-8").read()
data = json.loads(raw[raw.index("{"): raw.rindex("}") + 1])
people = json.load(open(os.path.join(REPO, "tools", "voices.json"), encoding="utf-8"))
sets = {"them": {}, "me": {}, "words": {}}
for ph in data["phrases"]:
    sets["them" if ph["who"] == "them" else "me"][slug(ph["en"])] = ph["en"]
for p in data["pairs"]:
    for k in ("a", "b"):
        sets["words"][slug(p[k])] = p[k]
kk = Kokoro(os.path.join(MODELS, "kokoro-v1.0.onnx"), os.path.join(MODELS, "voices-v1.0.bin"))
jobs = []
for pp in people:
    for st in pp["sets"]:
        for s, text in sets[st].items():
            jobs.append((pp, st, s, text))
print("jobs:", len(jobs), flush=True)
t0 = time.time(); made = 0
for i, (pp, st, s, text) in enumerate(jobs):
    out = os.path.join(REPO, "audio", "v", pp["id"], s + ".mp3")
    if not os.path.exists(out):
        os.makedirs(os.path.dirname(out), exist_ok=True)
        sp = pp["speed"] * (0.92 if st == "words" else 1.0)
        a, sr = kk.create(text, voice=pp["voice"], speed=sp, lang="en-us")
        wav = os.path.join(TMP, "v.wav"); sf.write(wav, np.asarray(a, dtype=np.float32), sr)
        af = ("silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.03,"
              "areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.03,areverse,")
        if pp["pitch"] != 1.0:  # 어르신 목소리: 음높이를 조금 낮춰요 (빠르기는 그대로)
            af += f"asetrate={sr}*{pp['pitch']},aresample={sr},atempo={1 / pp['pitch']:.4f},"
        af += "adelay=80:all=1,apad=pad_dur=0.12,loudnorm=I=-16:TP=-1.5:LRA=11"
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", wav, "-af", af, "-ac", "1", "-ar", "24000",
                        "-codec:a", "libmp3lame", "-b:a", "48k", out], check=True)
        made += 1
    if (i + 1) % 50 == 0:
        print(f"  {i + 1}/{len(jobs)}  made {made}  {time.time() - t0:.0f}s", flush=True)
mpath = os.path.join(REPO, "audio", "manifest.json")
m = json.load(open(mpath, encoding="utf-8"))
m["people"] = [{k: pp[k] for k in ("id", "label", "desc", "sets")} for pp in people]
m["sets"] = {st: sorted(v) for st, v in sets.items()}
json.dump(m, open(mpath, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
print("done. made", made, "time", int(time.time() - t0), "s")
