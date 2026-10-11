import json, os, re, subprocess, sys, time
import numpy as np
import soundfile as sf
from kokoro_onnx import Kokoro

REPO = sys.argv[1]
MODELS = sys.argv[2]
TMP = sys.argv[3]
VOICE = "af_heart"
os.makedirs(os.path.join(REPO, "audio"), exist_ok=True)
os.makedirs(TMP, exist_ok=True)


def slug(t):
    s = re.sub(r"[^a-z0-9]+", "-", t.lower()).strip("-")
    return s[:80]


# ---- app 데이터에서 읽어 줄 영어 모으기 (data.js 에서 JSON만 꺼내요) ----
raw = open(os.path.join(REPO, "data.js"), encoding="utf-8").read()
data = json.loads(raw[raw.index("{"): raw.rindex("}") + 1])

texts = {}  # text -> kind ('word' | 'sentence')
for p in data["pairs"]:
    for k in ("a", "b"):
        if p[k]:
            texts[p[k]] = "word"
    for k in ("aEx", "bEx"):
        if p[k]:
            texts[p[k]] = "sentence"
for ph in data["phrases"]:
    texts[ph["en"]] = "sentence"
for m in data["missions"]:
    mm = re.search(r"'(.+?)'(?=[을를은는이가도\s.,]|$)", m)
    if mm:
        texts[re.sub(r"_{2,}", "the station", mm.group(1))] = "sentence"
texts["Hello, how are you today?"] = "sentence"  # 설정 화면의 소리 확인

# 겹치는 slug 확인
seen = {}
for t in texts:
    s = slug(t)
    assert s not in seen, f"slug 충돌: {t!r} / {seen[s]!r}"
    seen[s] = t

print("texts:", len(texts), "(words", sum(v == 'word' for v in texts.values()), ")")

kokoro = Kokoro(os.path.join(MODELS, "kokoro-v1.0.onnx"), os.path.join(MODELS, "voices-v1.0.bin"))

SPEED = {("word", False): 0.9, ("word", True): 0.65, ("sentence", False): 0.95, ("sentence", True): 0.72}
t0 = time.time()
report = []
for i, (text, kind) in enumerate(sorted(texts.items())):
    for slow in (False, True):
        name = slug(text) + (".slow" if slow else "")
        wav = os.path.join(TMP, name + ".wav")
        out = os.path.join(REPO, "audio", name + ".mp3")
        samples, sr = kokoro.create(text, voice=VOICE, speed=SPEED[(kind, slow)], lang="en-us")
        samples = np.asarray(samples, dtype=np.float32)
        sf.write(wav, samples, sr)
        # 앞뒤 무음 정리 → 앞에 0.08초 여유 → 음량 맞추기 → mp3
        af = ("silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.03,"
              "areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.03,areverse,"
              "adelay=80:all=1,apad=pad_dur=0.12,loudnorm=I=-16:TP=-1.5:LRA=11")
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", wav, "-af", af, "-ac", "1", "-ar", "24000",
                        "-codec:a", "libmp3lame", "-b:a", "64k", out], check=True)
        os.remove(wav)
        report.append((name, len(samples) / sr, os.path.getsize(out)))
    if (i + 1) % 10 == 0:
        print(f"  {i + 1}/{len(texts)}  {time.time() - t0:.0f}s", flush=True)

manifest = {"voice": VOICE, "items": sorted(slug(t) for t in texts)}
json.dump(manifest, open(os.path.join(REPO, "audio", "manifest.json"), "w"), indent=0)
tot = sum(r[2] for r in report)
print("files:", len(report), "total KB:", tot // 1024, "time:", int(time.time() - t0), "s")
json.dump(report, open(os.path.join(TMP, "report.json"), "w"))
