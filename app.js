(function () {
  'use strict';

  /* ===== 기본 설정 ===== */
  var CFG = window.APP_CONFIG || {};
  var DATA = JSON.parse(JSON.stringify(window.DEFAULT_DATA));
  var dataSource = '내장 데이터';
  var KEY = 'eng-mom-v1';
  var SHEET_CACHE_KEY = 'eng-mom-sheet-v1';

  var LEVELS = [
    { name: '초보', emoji: '🐣', xp: 0 },
    { name: '생존 영어', emoji: '🚗', xp: 300 },
    { name: '마트 마스터', emoji: '🦁', xp: 800 },
    { name: '캐나다 전문가', emoji: '👑', xp: 1800 }
  ];
  var FONT_SIZES = [19, 22, 26];
  var FONT_LABELS = ['보통', '크게', '최대'];
  var GOAL_QUIZ = 1;
  var GOAL_PHRASES = 2;

  /* ===== 작은 도구들 ===== */
  function $(s) { return document.querySelector(s); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function pad(n) { return String(n).padStart(2, '0'); }
  function ymd(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function today() { return ymd(new Date()); }
  function addDays(s, n) {
    var p = s.split('-').map(Number);
    return ymd(new Date(p[0], p[1] - 1, p[2] + n));
  }
  function weekKey(s) {
    s = s || today();
    var p = s.split('-').map(Number);
    var dow = (new Date(p[0], p[1] - 1, p[2]).getDay() + 6) % 7; // 월요일 시작
    return addDays(s, -dow);
  }

  /* ===== 저장 데이터 ===== */
  function defaults() {
    return {
      v: 1, xp: 0,
      settings: { name: '어머니', fs: 1, ko: true, sfx: true, voice: '' },
      days: {}, streak: { count: 0, last: '', best: 0 },
      groups: {}, phrases: {}, badges: {}, missions: {}, weekly: {}
    };
  }
  var S = defaults();
  function load() {
    try {
      var r = JSON.parse(localStorage.getItem(KEY));
      if (r && r.v === 1) {
        var d = defaults();
        var out = Object.assign(d, r);
        out.settings = Object.assign(defaults().settings, r.settings || {});
        return out;
      }
    } catch (e) {}
    return defaults();
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  function dayRec() {
    var t = today();
    if (!S.days[t]) S.days[t] = { quiz: 0, phrases: [], xp: 0, done: false };
    return S.days[t];
  }
  function peekDay() { return S.days[today()] || { quiz: 0, phrases: [], xp: 0, done: false }; }
  function weekRec(k) { if (!S.weekly[k]) S.weekly[k] = { c: 0, t: 0 }; return S.weekly[k]; }
  function accOf(w) { return w && w.t ? Math.round(100 * w.c / w.t) : null; }
  function gs(id) { return S.groups[id] || { plays: 0, best: 0, last: null, hist: [] }; }
  function streakNow() {
    var t = today();
    return (S.streak.last === t || S.streak.last === addDays(t, -1)) ? S.streak.count : 0;
  }

  /* ===== 데이터 접근 ===== */
  function gById(id) { return DATA.groups.filter(function (g) { return g.id === id; })[0]; }
  function pairsOf(id) { return DATA.pairs.filter(function (p) { return p.g === id; }); }
  function coreGroups() { return DATA.groups.filter(function (g) { return g.core; }); }
  function bonusUnlocked() { return coreGroups().every(function (g) { return gs(g.id).plays > 0; }); }
  function groupUnlocked(g) { return g.core || bonusUnlocked(); }

  /* ===== 점수·레벨·배지 ===== */
  function levelOf(xp) {
    var i = 0;
    LEVELS.forEach(function (l, k) { if (xp >= l.xp) i = k; });
    return i;
  }
  function addXP(n, q) {
    var before = levelOf(S.xp);
    S.xp += n;
    dayRec().xp += n;
    var after = levelOf(S.xp);
    if (after > before) {
      q.push({ emoji: LEVELS[after].emoji, title: '레벨 업! ' + LEVELS[after].name, text: '대단해요! 새 칭호를 얻었어요.' });
    }
  }
  function badgeList() {
    var base = [
      { id: 'first_quiz', emoji: '🌱', name: '첫 걸음', desc: '소리 구분 게임을 처음 끝냈어요' },
      { id: 'first_rec', emoji: '🎙️', name: '첫 녹음', desc: '내 목소리를 처음 녹음했어요' },
      { id: 'perfect', emoji: '💯', name: '소리 구분 100%', desc: '한 판을 전부 한 번에 맞혔어요' },
      { id: 'streak3', emoji: '🔥', name: '3일 연속', desc: '3일 연속으로 오늘 목표를 끝냈어요' },
      { id: 'streak7', emoji: '🔥', name: '7일 연속', desc: '7일 연속으로 오늘 목표를 끝냈어요' },
      { id: 'rescue', emoji: '🛟', name: '구제 문장 마스터', desc: '구제 문장을 모두 3번씩 성공했어요' },
      { id: 'mission1', emoji: '🎯', name: '실전 용사', desc: '실전 미션을 처음 해냈어요' },
      { id: 'bonus', emoji: '🔓', name: '보너스 스테이지', desc: '기본 게임 3개를 모두 끝냈어요' }
    ];
    return base.concat(DATA.groups.map(function (g) {
      return { id: 'acc_' + g.id, emoji: g.emoji, name: g.title + ' 귀 열림', desc: '정답률 90% 이상을 달성했어요' };
    }));
  }
  function award(id, q) {
    if (S.badges[id]) return;
    var b = badgeList().filter(function (x) { return x.id === id; })[0];
    if (!b) return;
    S.badges[id] = today();
    q.push({ emoji: b.emoji, title: '새 배지! ' + b.name, text: b.desc + ' (+20점)' });
    addXP(20, q);
  }
  function checkDaily(q) {
    var d = dayRec();
    if (d.done) return;
    if (d.quiz >= GOAL_QUIZ && d.phrases.length >= GOAL_PHRASES) {
      d.done = true;
      var t = today();
      if (S.streak.last === addDays(t, -1)) S.streak.count++;
      else if (S.streak.last !== t) S.streak.count = 1;
      S.streak.last = t;
      S.streak.best = Math.max(S.streak.best, S.streak.count);
      addXP(30, q);
      q.push({ emoji: '🎉', title: '오늘 목표 완료!', text: '🔥 ' + S.streak.count + '일 연속! 보너스 +30점' });
      if (S.streak.count >= 3) award('streak3', q);
      if (S.streak.count >= 7) award('streak7', q);
      logEvent('daily_done', { streak: S.streak.count });
    }
  }

  /* ===== 시트 기록 (선택) ===== */
  function logEvent(type, detail) {
    if (!CFG.APPS_SCRIPT_URL) return;
    try {
      fetch(CFG.APPS_SCRIPT_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ user: CFG.USER_ID || 'mom', type: type, detail: detail || {}, xp: S.xp, streak: S.streak.count, ts: new Date().toISOString() })
      }).catch(function () {});
    } catch (e) {}
  }

  /* ===== 소리 (음성 합성, 효과음) ===== */
  var voices = [];
  function loadVoices() {
    try {
      voices = (window.speechSynthesis ? speechSynthesis.getVoices() : []).filter(function (v) { return /^en/i.test(v.lang); });
    } catch (e) { voices = []; }
  }
  if (window.speechSynthesis) {
    loadVoices();
    try { speechSynthesis.onvoiceschanged = loadVoices; } catch (e) {}
  }
  function pickVoice() {
    if (S.settings.voice) {
      var v = voices.filter(function (x) { return x.voiceURI === S.settings.voice; })[0];
      if (v) return v;
    }
    return voices.filter(function (v) { return /en[-_]CA/i.test(v.lang); })[0] ||
      voices.filter(function (v) { return /en[-_]US/i.test(v.lang); })[0] || voices[0] || null;
  }
  // 미리 만든 mp3(audio/ 폴더)를 먼저 재생하고, 없는 문장만 기기 내장 음성으로 읽어요.
  var CLIPS = {};
  var player = new Audio();   // 영어 소리 전용 (한 번 깨워 두면 이후엔 터치 없이도 재생돼요)
  var myPlayer = new Audio(); // 내 녹음 재생 전용
  player.preload = 'auto';
  function slugOf(t) {
    return String(t).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);
  }
  function loadClips() {
    try {
      fetch('audio/manifest.json').then(function (r) { return r.ok ? r.json() : null; }).then(function (m) {
        if (m && m.items) m.items.forEach(function (k) { CLIPS[k] = 1; });
      }).catch(function () {});
    } catch (e) {}
  }
  function playClip(text, slow) {
    return new Promise(function (resolve) {
      var id = slugOf(text);
      if (!CLIPS[id]) return resolve(false);
      try { player.pause(); } catch (e) {}
      player.onended = function () { if (realEnd(player)) resolve(true); };
      player.onerror = function () { resolve(false); };
      player.src = 'audio/' + id + (slow ? '.slow' : '') + '.mp3';
      var pr;
      try { pr = player.play(); } catch (e) { return resolve(false); }
      if (pr && pr.catch) pr.catch(function (err) {
        if (err && err.name === 'AbortError') return; // 다른 소리로 바뀌었어요
        if (err && err.name === 'NotAllowedError') {
          toast('🔊 버튼을 눌러서 들어 보세요');
          return resolve(true);
        }
        resolve(false);
      });
    });
  }
  function speak(text, rate) {
    var slow = (rate || 0.85) < 0.7;
    return playClip(text, slow).then(function (played) {
      if (played) return;
      return speakTTS(text, rate);
    });
  }
  // 깨워 두려고 재생한 무음의 늦은 '끝' 신호는 무시해요
  function realEnd(a) { return a.duration > 0 && a.currentTime >= a.duration - 0.3; }
  function cancelSpeech() {
    // 말하는 중일 때만 멈춰요 (아이폰은 멈춘 직후 바로 말하게 하면 소리가 씹힐 때가 있어요)
    try {
      var s = window.speechSynthesis;
      if (s && (s.speaking || s.pending)) { s.cancel(); return true; }
    } catch (e) {}
    return false;
  }
  function stopAudio() {
    cancelSpeech();
    try { player.pause(); } catch (e) {}
    try { myPlayer.pause(); } catch (e) {}
  }
  var curUtt = null; // 말하는 도중에 사라지지 않게 붙잡아 둬요
  var hintShown = false;
  function speakTTS(text, rate) {
    return new Promise(function (resolve) {
      var synth = window.speechSynthesis;
      if (!synth || typeof SpeechSynthesisUtterance === 'undefined') {
        toast('이 화면에서는 영어 소리를 낼 수 없어요. Safari로 열어 주세요.');
        return resolve();
      }
      var wasBusy = cancelSpeech();
      try { if (synth.paused) synth.resume(); } catch (e) {}
      if (!voices.length) loadVoices();
      var u = new SpeechSynthesisUtterance(text);
      var v = pickVoice();
      if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = 'en-US'; }
      u.rate = rate || 0.85;
      u.volume = 1;
      curUtt = u;
      var done = false, started = false, timer, hintTimer;
      function fin() { if (!done) { done = true; clearTimeout(timer); clearTimeout(hintTimer); resolve(); } }
      u.onstart = function () { started = true; };
      u.onend = fin; u.onerror = fin;
      timer = setTimeout(fin, 2000 + text.length * 130); // 일부 기기는 onend가 안 올 때가 있어요
      // 소리가 시작되지 않으면 원인을 알려 줘요 (무음 스위치, 볼륨 등)
      hintTimer = setTimeout(function () {
        if (!started && !done && !hintShown) {
          hintShown = true;
          toast('소리가 안 나나요? 아이폰 옆 무음 스위치와 볼륨을 확인해 주세요.');
        }
      }, 1500);
      function go() { try { synth.speak(u); } catch (e) { fin(); } }
      if (wasBusy) setTimeout(go, 80); else go(); // 평소엔 누르는 즉시 말해요 (아이폰 규칙)
    });
  }
  var actx = null;
  function beep(kind) {
    if (!S.settings.sfx) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      if (actx.state === 'suspended') actx.resume();
      var seq = kind === 'ok' ? [[660, 0], [880, 0.12]] :
        kind === 'win' ? [[523, 0], [659, 0.12], [784, 0.24], [1047, 0.36]] : [[330, 0], [294, 0.12]];
      seq.forEach(function (n) {
        var o = actx.createOscillator(), g = actx.createGain(), t0 = actx.currentTime + n[1];
        o.type = 'sine'; o.frequency.value = n[0];
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(0.15, t0 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.2);
        o.connect(g); g.connect(actx.destination);
        o.start(t0); o.stop(t0 + 0.22);
      });
    } catch (e) {}
  }

  /* ===== 알림창 ===== */
  var modalQ = [];
  function celebrate(items) {
    modalQ = modalQ.concat(items);
    if ($('#modal').hidden) nextModal();
  }
  function nextModal() {
    var m = $('#modal');
    var it = modalQ.shift();
    if (!it) { m.hidden = true; m.innerHTML = ''; return; }
    beep('win');
    m.hidden = false;
    m.innerHTML = '<div class="pop" role="dialog" aria-live="assertive"><div class="pop-emoji">' + it.emoji + '</div><h3>' +
      esc(it.title) + '</h3><p>' + esc(it.text) + '</p><button class="btn accent" data-act="modalnext">' +
      (modalQ.length ? '다음 ▶' : '확인') + '</button></div>';
  }
  var toastT;
  function toast(msg) {
    var t = $('#toast');
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastT);
    toastT = setTimeout(function () { t.hidden = true; }, 2400);
  }

  /* ===== 화면 이동 ===== */
  var PARENT = { pairs: 'home', listen: 'pairs', quiz: 'pairs', result: 'pairs', phrases: 'home', phrase: 'phrases', mission: 'home', records: 'home', settings: 'home' };
  var ui = { view: 'home', params: {}, slow: false };
  var VIEWS = {}, ACT = {}, CHG = {};
  var Q = null;   // 진행 중인 게임
  var R = null;   // 진행 중인 문장 연습

  function newR() { return { url: null, rec: null, recording: false, evald: false, ok: false, xp: 0 }; }
  function cleanupRec() {
    if (R) {
      if (R.rec && R.recording) { try { R.rec.stop(); } catch (e) {} } // onstop에서 마이크를 꺼요
      if (R.url) { try { URL.revokeObjectURL(R.url); } catch (e) {} }
    }
    R = null;
  }
  function go(view, params) {
    stopAudio();
    if (ui.view === 'phrase' || view === 'phrase') cleanupRec();
    if (view !== 'listen') ui.slow = false; // '천천히' 설정은 소리 들어 보기 화면에서만 유지돼요
    if (view === 'phrase') R = newR();
    ui.view = view;
    ui.params = params || {};
    render(false);
    window.scrollTo(0, 0);
  }
  function applyFont() {
    document.documentElement.style.setProperty('--fs', FONT_SIZES[S.settings.fs] + 'px');
  }
  function header(title, back) {
    return '<header class="top">' +
      (back ? '<button class="btn sm alt back" data-act="back" aria-label="뒤로">◀ 뒤로</button>' : '') +
      '<h2>' + esc(title) + '</h2></header>';
  }
  function render(keep) {
    var y = window.scrollY;
    var fn = VIEWS[ui.view] || VIEWS.home;
    var out = fn(ui.params);
    $('#app').innerHTML = header(out.title, ui.view !== 'home') + out.html;
    document.body.setAttribute('data-view', ui.view);
    applyFont();
    if (keep) window.scrollTo(0, y);
    if (out.after) out.after();
  }
  function rerender() { render(true); }

  /* ===== 홈 ===== */
  VIEWS.home = function () {
    var li = levelOf(S.xp), L = LEVELS[li], N = LEVELS[li + 1];
    var pct = N ? Math.round(100 * (S.xp - L.xp) / (N.xp - L.xp)) : 100;
    var d = peekDay();
    var st = streakNow();
    var wk = weekKey();
    var missionNew = !S.missions[wk];
    function goal(ok, label, prog) {
      return '<li class="' + (ok ? 'done' : '') + '"><span class="chk">' + (ok ? '✅' : '⬜') + '</span><span>' + label + '</span><b>' + prog + '</b></li>';
    }
    var html =
      '<section class="hello"><h1>' + esc(S.settings.name) + ', 안녕하세요! 👋</h1><p class="muted">오늘도 10분만 해 봐요.</p></section>' +
      '<section class="card level"><div class="lv-emoji">' + L.emoji + '</div><div class="lv-main"><div class="lv-name">' + esc(L.name) +
      '</div><div class="bar"><i style="width:' + pct + '%"></i></div><div class="muted small">' +
      (N ? S.xp + ' / ' + N.xp + '점 · 다음: ' + N.emoji + ' ' + esc(N.name) : S.xp + '점 · 최고 레벨이에요!') + '</div></div>' +
      '<div class="streak" title="연속 학습일">🔥<b>' + st + '</b><span>일</span></div></section>' +
      '<section class="card goals"><h3>오늘 할 일</h3><ul>' +
      goal(d.quiz >= GOAL_QUIZ, '소리 구분 게임 1판', Math.min(d.quiz, GOAL_QUIZ) + '/' + GOAL_QUIZ) +
      goal(d.phrases.length >= GOAL_PHRASES, '이럴 때 쓰는 말 2개 따라 하기', Math.min(d.phrases.length, GOAL_PHRASES) + '/' + GOAL_PHRASES) +
      '</ul>' + (d.done ? '<p class="done-msg">오늘 목표 끝! 🎉 더 하면 점수가 계속 쌓여요.</p>' :
        '<p class="muted small">둘 다 끝내면 🔥 ' + (st + 1) + '일째가 돼요 (+30점)</p>') + '</section>' +
      '<nav class="menu">' +
      '<button class="menu-btn" data-act="go" data-v="pairs"><span class="m-e">👂</span><span><b>소리 구분 게임</b><small>f/p, v/b, l/r… 귀를 열어요</small></span></button>' +
      '<button class="menu-btn" data-act="go" data-v="phrases"><span class="m-e">🗣️</span><span><b>이럴 때 쓰는 말</b><small>못 알아들었을 때 바로 쓰는 문장</small></span></button>' +
      '<button class="menu-btn" data-act="go" data-v="mission"><span class="m-e">🎯</span><span><b>이번 주 실전 미션</b><small>' + (missionNew ? '새 미션이 기다려요!' : '이번 주 미션 완료 ✅') + '</small></span></button>' +
      '<button class="menu-btn" data-act="go" data-v="records"><span class="m-e">🏅</span><span><b>내 기록</b><small>배지와 정답률</small></span></button>' +
      '</nav>' +
      '<p class="c"><button class="btn sm ghost" data-act="go" data-v="settings">⚙️ 설정</button></p>';
    return { title: '영어 한 걸음', html: html };
  };

  /* ===== 소리 구분: 목록 ===== */
  VIEWS.pairs = function () {
    function card(g) {
      var st = gs(g.id), open = groupUnlocked(g), n = pairsOf(g.id).length;
      var sub = !open ? '기본 3개를 끝내면 열려요 🔒' : (st.plays ? '최고 ' + st.best + '% · ' + st.plays + '판' : '아직 안 해 봤어요');
      return '<section class="card group ' + (open ? '' : 'locked') + '"><div class="g-head"><span class="g-emoji">' + g.emoji + '</span><div><h3>' +
        esc(g.title) + '</h3><p class="muted small">' + sub + '</p></div></div>' +
        (open && n >= 2 ? '<div class="row"><button class="btn alt" data-act="go" data-v="listen" data-gid="' + esc(g.id) + '">👂 소리 들어 보기</button>' +
          '<button class="btn" data-act="startQuiz" data-gid="' + esc(g.id) + '">🎮 게임 시작</button></div>' : '') + '</section>';
    }
    var core = DATA.groups.filter(function (g) { return g.core; }).map(card).join('');
    var bonus = DATA.groups.filter(function (g) { return !g.core; }).map(card).join('');
    var html = '<p class="lead">먼저 <b>소리 들어 보기</b>로 두 소리를 비교하고, 그다음 <b>게임</b>으로 확인해 봐요. 틀려도 감점은 없어요!</p>' +
      '<h3 class="sec">기본</h3>' + core + (bonus ? '<h3 class="sec">보너스</h3>' + bonus : '');
    return { title: '소리 구분 게임', html: html };
  };

  /* ===== 소리 구분: 들어 보기 ===== */
  VIEWS.listen = function (p) {
    var g = gById(p.gid);
    if (!g) return VIEWS.pairs();
    var rows = pairsOf(g.id).map(function (x) {
      function tile(w, k) {
        return '<button class="tile" data-act="say" data-w="' + esc(w) + '"><span class="w" lang="en">' + esc(w) + '</span><span class="k">' + esc(k) + '</span><span class="sp">🔊</span></button>';
      }
      function ex(t) { return t ? '<button class="ex" data-act="say" data-w="' + esc(t) + '">💬 <span lang="en">' + esc(t) + '</span></button>' : ''; }
      return '<div class="pair"><div class="row">' + tile(x.a, x.aKo) + tile(x.b, x.bKo) + '</div>' + ex(x.aEx) + ex(x.bEx) + '</div>';
    }).join('');
    var html = '<section class="card tip"><h3>' + g.emoji + ' 입 모양 팁</h3><p>' + esc(g.tip) + '</p></section>' +
      '<p class="c"><button class="btn sm alt ' + (ui.slow ? 'on' : '') + '" data-act="toggleSlow">' + (ui.slow ? '🐢 천천히: 켜짐' : '🐢 천천히: 꺼짐') + '</button></p>' +
      '<p class="muted small c">단어를 눌러서 두 소리를 번갈아 들어 보세요.</p>' + rows +
      '<button class="btn" data-act="startQuiz" data-gid="' + esc(g.id) + '">🎮 게임 시작</button>';
    return { title: g.title, html: html };
  };

  /* ===== 소리 구분: 게임 ===== */
  ACT.startQuiz = function (d) {
    var g = gById(d.gid);
    var ps = g ? pairsOf(g.id) : [];
    if (ps.length < 2) { toast('문제가 부족해요'); return; }
    var first = gs(g.id).plays === 0;
    var pool = first ? ps.slice(0, Math.min(4, ps.length)) : ps; // 처음엔 쉬운 단어만
    var items = [];
    pool.forEach(function (p, i) { items.push({ pi: i, t: 'a' }); items.push({ pi: i, t: 'b' }); });
    items = shuffle(items).slice(0, Math.min(first ? 6 : 8, items.length));
    Q = { gid: g.id, ps: ps, queue: items, i: 0, total: items.length, first: 0, combo: 0, answered: false, last: null, xp0: S.xp };
    go('quiz');
  };

  VIEWS.quiz = function () {
    if (!Q) return VIEWS.home();
    var it = Q.queue[Q.i];
    var p = Q.ps[it.pi];
    var word = it.t === 'a' ? p.a : p.b;
    if (it.flip === undefined) it.flip = Math.random() < 0.5;
    var order = it.flip ? ['b', 'a'] : ['a', 'b'];
    var total = Q.queue.length;
    var pct = Math.round(100 * Q.i / total);
    var ans = order.map(function (s) {
      var w = s === 'a' ? p.a : p.b, k = s === 'a' ? p.aKo : p.bKo, cls = '';
      if (Q.answered) {
        if (s === it.t) cls = ' right';
        else if (Q.last && Q.last.side === s && !Q.last.ok) cls = ' miss';
        else cls = ' dim';
      }
      return '<button class="ans' + cls + '" data-act="qans" data-side="' + s + '"' + (Q.answered ? ' disabled' : '') + '><span class="w" lang="en">' + esc(w) + '</span><span class="k">' + esc(k) + '</span></button>';
    }).join('');
    var fb = '';
    if (Q.answered) {
      var ex = it.t === 'a' ? p.aEx : p.bEx;
      var tk = it.t === 'a' ? p.aKo : p.bKo;
      if (Q.last.ok) {
        fb = '<div class="fb good"><b>' + (it.retry ? '좋아요! 이번엔 맞혔어요 👍' : '정답이에요! 🎉') + '</b>' +
          (Q.combo >= 3 ? '<div class="combo">🔥 ' + Q.combo + '연속 정답!</div>' : '') +
          '<p><span lang="en">' + esc(word) + '</span> = ' + esc(tk) + '</p>' +
          (ex ? '<button class="ex" data-act="say" data-w="' + esc(ex) + '">💬 <span lang="en">' + esc(ex) + '</span></button>' : '') + '</div>';
      } else {
        fb = '<div class="fb try"><b>아깝다! 두 소리를 비교해서 들어 봐요 👂</b><div class="row">' +
          '<button class="btn alt" data-act="say" data-w="' + esc(p.a) + '">🔊 ' + esc(p.a) + '</button>' +
          '<button class="btn alt" data-act="say" data-w="' + esc(p.b) + '">🔊 ' + esc(p.b) + '</button></div>' +
          (it.retry ? '' : '<p class="muted small">이 문제는 마지막에 한 번 더 나와요.</p>') + '</div>';
      }
      fb += '<button class="btn" data-act="qnext">' + (Q.i + 1 >= Q.queue.length ? '결과 보기 ▶' : '다음 ▶') + '</button>';
    }
    var html = '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
      '<p class="muted small c">문제 ' + (Q.i + 1) + ' / ' + total + (total > Q.total ? ' (복습 포함)' : '') + (it.retry ? ' · 📌 복습 문제' : '') + '</p>' +
      '<p class="lead c">들려주는 소리는 어느 쪽일까요?</p>' +
      '<div class="c"><button class="play" data-act="qplay" aria-label="다시 듣기">🔊</button>' +
      '<div><button class="btn sm alt" data-act="qslow">🐢 천천히 듣기</button></div></div>' +
      '<div class="answers">' + ans + '</div>' + fb;
    return {
      title: (gById(Q.gid) || { title: '게임' }).title, html: html,
      after: function () {
        if (!Q.answered) setTimeout(function () { if (ui.view === 'quiz' && Q && !Q.answered) speak(word, 0.85); }, 250);
        else { var f = document.querySelector('.fb'); if (f && f.scrollIntoView) f.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
      }
    };
  };
  function curWord() {
    var it = Q.queue[Q.i], p = Q.ps[it.pi];
    return it.t === 'a' ? p.a : p.b;
  }
  ACT.qplay = function () { if (Q) speak(curWord(), 0.85); };
  ACT.qslow = function () { if (Q) speak(curWord(), 0.55); };
  ACT.qans = function (d) {
    if (!Q || Q.answered) return;
    var it = Q.queue[Q.i], ok = d.side === it.t, q = [];
    Q.answered = true;
    Q.last = { ok: ok, side: d.side };
    if (!it.retry) {
      var wk = weekRec(weekKey());
      wk.t++;
      if (ok) { wk.c++; Q.first++; Q.combo++; addXP(10, q); }
      else { Q.combo = 0; Q.queue.push({ pi: it.pi, t: it.t, retry: true }); }
    } else if (ok) { addXP(5, q); } else { Q.combo = 0; }
    beep(ok ? 'ok' : 'try');
    save();
    rerender();
    if (q.length) celebrate(q);
  };
  ACT.qnext = function () {
    if (!Q) return;
    Q.i++; Q.answered = false; Q.last = null;
    if (Q.i >= Q.queue.length) finishQuiz();
    else { render(false); window.scrollTo(0, 0); }
  };
  function finishQuiz() {
    var q = [], gid = Q.gid;
    if (!S.groups[gid]) S.groups[gid] = { plays: 0, best: 0, last: null, hist: [] };
    var st = S.groups[gid];
    var acc = Math.round(100 * Q.first / Q.total);
    var prev = st.last, prevBest = st.best;
    st.plays++; st.last = acc; st.best = Math.max(st.best, acc);
    st.hist.push({ d: today(), acc: acc });
    if (st.hist.length > 30) st.hist.shift();
    addXP(20, q);
    var perfect = Q.first === Q.total;
    if (perfect) addXP(30, q);
    dayRec().quiz++;
    award('first_quiz', q);
    if (acc >= 90) award('acc_' + gid, q);
    if (perfect) award('perfect', q);
    if (coreGroups().length && bonusUnlocked()) award('bonus', q);
    checkDaily(q);
    var res = { gid: gid, acc: acc, prev: prev, prevBest: prevBest, xp: S.xp - Q.xp0, perfect: perfect };
    save();
    logEvent('quiz', { group: gid, acc: acc });
    Q = null;
    go('result', res);
    if (acc >= 90) beep('win');
    if (q.length) celebrate(q);
  }
  VIEWS.result = function (r) {
    var g = gById(r.gid) || { title: '게임' };
    var stars = r.acc >= 90 ? 3 : r.acc >= 70 ? 2 : 1;
    var msg = r.perfect ? '완벽해요! 모든 소리를 한 번에 맞혔어요!' :
      r.acc >= 70 ? '좋아요! 귀가 열리고 있어요.' : '괜찮아요! 처음엔 다 어려워요. 소리를 다시 들어 보고 도전해 봐요.';
    var cmp;
    if (r.prev == null) cmp = '첫 기록이에요! 다음엔 이 점수를 넘어 보세요 💪';
    else if (r.acc > r.prevBest) cmp = '🏆 신기록! 지난번 ' + r.prev + '% → 이번 ' + r.acc + '%';
    else if (r.acc > r.prev) cmp = '지난번 ' + r.prev + '% → 이번 ' + r.acc + '% ⬆️';
    else if (r.acc === r.prev) cmp = '지난번과 같아요 (' + r.prev + '%). 다음엔 한 단계 더!';
    else cmp = '지난번 ' + r.prev + '%, 이번 ' + r.acc + '%. 괜찮아요, 다시 하면 올라가요!';
    var wk = weekKey(), tw = accOf(S.weekly[wk]), lw = accOf(S.weekly[addDays(wk, -7)]);
    var wline = tw == null ? '' : '<p class="muted small c">이번 주 정답률 ' + tw + '%' + (lw != null ? ' (지난주 ' + lw + '%)' : '') + '</p>';
    var html = '<section class="card result"><div class="stars">' + '⭐'.repeat(stars) + '<span class="off">' + '☆'.repeat(3 - stars) + '</span></div>' +
      '<div class="big-acc">' + r.acc + '%</div><p class="lead">' + msg + '</p><p class="cmp">' + cmp + '</p>' +
      '<p class="gain">이번 판에서 +' + r.xp + '점</p>' + wline + '</section>' +
      '<button class="btn" data-act="startQuiz" data-gid="' + esc(r.gid) + '">🎮 한 판 더</button>' +
      '<div style="height:.6rem"></div><button class="btn alt" data-act="go" data-v="listen" data-gid="' + esc(r.gid) + '">👂 소리 다시 들어 보기</button>' +
      '<div style="height:.6rem"></div><button class="btn ghost" data-act="go" data-v="home">🏠 처음으로</button>';
    return { title: g.title + ' 결과', html: html };
  };

  /* ===== 이럴 때 쓰는 말 ===== */
  VIEWS.phrases = function () {
    var mastered = DATA.phrases.filter(function (p) { return (S.phrases[p.id] || {}).ok >= 3; }).length;
    var cards = DATA.phrases.map(function (p) {
      var ok = (S.phrases[p.id] || {}).ok || 0, n = Math.min(3, ok);
      return '<button class="card phrase-card" data-act="go" data-v="phrase" data-id="' + esc(p.id) + '"><div class="en" lang="en">' + esc(p.en) +
        '</div><div class="ko">' + esc(p.ko) + '</div><div class="prog">' + '⭐'.repeat(n) + '☆'.repeat(3 - n) + (ok >= 3 ? ' 마스터!' : '') + '</div></button>';
    }).join('');
    var html = '<p class="lead">단어가 생각 안 나거나 못 알아들었을 때, 이 문장들만 알아도 대화가 이어져요. <b>"잘 됐어요"를 3번</b> 하면 ⭐ 마스터!</p>' +
      '<p class="muted c">마스터 ' + mastered + ' / ' + DATA.phrases.length + '</p>' + cards;
    return { title: '이럴 때 쓰는 말', html: html };
  };
  function curPhrase() {
    var id = ui.params.id;
    return DATA.phrases.filter(function (x) { return x.id === id; })[0] || DATA.phrases[0];
  }
  VIEWS.phrase = function () {
    var ph = curPhrase();
    if (!ph) return VIEWS.phrases();
    if (!R) R = newR();
    var canRec = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
    var rec = S.phrases[ph.id] || { ok: 0 };
    var idx = DATA.phrases.indexOf(ph);
    var nextP = DATA.phrases[idx + 1];
    var html = '<section class="card big-en"><div class="en" lang="en">' + esc(ph.en) + '</div><div class="ko-big">' + esc(ph.ko) + '</div>' +
      (S.settings.ko && ph.sound ? '<div class="sound">🗣️ ' + esc(ph.sound) + '</div>' : '') +
      '<p class="when">💡 ' + esc(ph.when) + '</p><p class="muted small">성공 ' + Math.min(3, rec.ok || 0) + ' / 3 ⭐</p></section>' +
      '<div class="step"><span class="n">1</span> 듣기</div>' +
      '<div class="row"><button class="btn" data-act="pplay">🔊 듣기</button><button class="btn alt" data-act="pslow">🐢 천천히</button></div>';
    if (canRec) {
      html += '<div class="step"><span class="n">2</span> 따라 말하기 (녹음)</div>' +
        '<button class="btn ' + (R.recording ? 'accent' : '') + '" data-act="rectoggle">' + (R.recording ? '⏹ 그만 녹음하기' : '🎙️ 녹음하고 따라 말하기') + '</button>' +
        (R.recording ? '<p class="rec-now c">🔴 녹음 중… 말하고 나서 버튼을 눌러 주세요</p>' : '') +
        '<div class="step"><span class="n">3</span> 내 목소리와 비교</div>' +
        '<div class="row"><button class="btn alt" data-act="myplay"' + (R.url ? '' : ' disabled') + '>▶ 내 목소리</button>' +
        '<button class="btn alt" data-act="compare"' + (R.url ? '' : ' disabled') + '>🔁 이어서 듣기</button></div>';
    } else {
      html += '<div class="step"><span class="n">2</span> 소리 내어 따라 말하기</div><p class="muted">이 기기에서는 녹음을 쓸 수 없어요. 듣고 나서 작은 소리로라도 꼭 따라 말해 보세요!</p>';
    }
    html += '<div class="step"><span class="n">4</span> 확인</div>';
    if (R.evald) {
      html += '<div class="fb ' + (R.ok ? 'good' : 'try') + '"><b>' + (R.ok ? '잘했어요! 👍 +15점' : '좋아요, 다시 해 보는 게 중요해요! +5점') + '</b></div>' +
        (nextP ? '<button class="btn" data-act="go" data-v="phrase" data-id="' + esc(nextP.id) + '">다음 문장 ▶</button>' : '<button class="btn" data-act="go" data-v="phrases">문장 목록으로 ▶</button>') +
        '<div style="height:.6rem"></div><button class="btn alt" data-act="again">🔁 한 번 더 연습</button>';
    } else {
      html += '<div class="row"><button class="btn" data-act="eval" data-ok="1">👍 잘 됐어요</button><button class="btn alt" data-act="eval" data-ok="0">🔁 다시 해볼게요</button></div>';
    }
    return { title: '따라 말하기', html: html };
  };
  ACT.pplay = function () { speak(curPhrase().en, 0.85); };
  ACT.pslow = function () { speak(curPhrase().en, 0.55); };
  ACT.again = function () { if (R) { R.evald = false; rerender(); } };
  ACT.rectoggle = async function () {
    if (!R) return;
    if (R.recording) { try { R.rec.stop(); } catch (e) {} return; }
    var mine = R;
    try {
      stopAudio();
      var stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      var types = ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm'], mt = '';
      for (var i = 0; i < types.length; i++) {
        if (MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(types[i])) { mt = types[i]; break; }
      }
      var rec = mt ? new MediaRecorder(stream, { mimeType: mt }) : new MediaRecorder(stream);
      var chunks = [];
      rec.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
      rec.onstop = function () {
        stream.getTracks().forEach(function (t) { t.stop(); });
        if (R !== mine) return; // 다른 화면으로 이동했으면 버려요
        if (mine.url) URL.revokeObjectURL(mine.url);
        mine.url = chunks.length ? URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || mt || 'audio/mp4' })) : null;
        mine.recording = false; mine.rec = null;
        var q = [];
        if (mine.url) award('first_rec', q);
        save();
        if (ui.view === 'phrase') rerender();
        if (q.length) celebrate(q);
      };
      rec.start();
      mine.rec = rec; mine.recording = true;
      rerender();
      setTimeout(function () { if (mine.rec === rec && mine.recording) { try { rec.stop(); } catch (e) {} } }, 15000);
    } catch (err) {
      mine.recording = false;
      toast('마이크를 쓸 수 없어요. 설정에서 마이크를 허용해 주세요.');
      if (ui.view === 'phrase') rerender();
    }
  };
  function playMine() {
    return new Promise(function (resolve) {
      if (!R || !R.url) return resolve();
      stopAudio();
      myPlayer.onended = function () { if (realEnd(myPlayer)) resolve(); }; myPlayer.onerror = resolve;
      myPlayer.src = R.url;
      var pr;
      try { pr = myPlayer.play(); } catch (e) { toast('내 목소리를 재생할 수 없어요'); return resolve(); }
      if (pr && pr.catch) pr.catch(function (err) {
        if (err && err.name === 'AbortError') return;
        toast('내 목소리를 재생할 수 없어요');
        resolve();
      });
    });
  }
  ACT.myplay = function () { playMine(); };
  ACT.compare = async function () {
    if (!R || !R.url) return;
    await speak(curPhrase().en, 0.85);
    await sleep(400);
    await playMine();
  };
  ACT.eval = function (d) {
    if (!R) return;
    var ph = curPhrase(), ok = d.ok === '1', q = [];
    var rec = S.phrases[ph.id] || (S.phrases[ph.id] = { ok: 0, tries: 0 });
    var before = rec.ok;
    rec.tries++;
    var dr = dayRec();
    if (dr.phrases.indexOf(ph.id) < 0) dr.phrases.push(ph.id);
    if (ok) { rec.ok++; addXP(15, q); } else { addXP(5, q); }
    if (before < 3 && rec.ok >= 3) q.push({ emoji: '⭐', title: '문장 마스터!', text: ph.en });
    if (DATA.phrases.every(function (x) { return (S.phrases[x.id] || {}).ok >= 3; })) award('rescue', q);
    checkDaily(q);
    save();
    logEvent('phrase', { id: ph.id, ok: ok });
    R.evald = true; R.ok = ok;
    beep(ok ? 'ok' : 'try');
    rerender();
    if (q.length) celebrate(q);
  };

  /* ===== 실전 미션 ===== */
  VIEWS.mission = function () {
    var wk = weekKey(), done = S.missions[wk];
    var list = DATA.missions.length ? DATA.missions : ['이번 주에 배운 문장을 실제로 한 번 써 보세요.'];
    var idx = done ? done.idx : Object.keys(S.missions).length % list.length;
    var text = list[idx % list.length];
    var m = /'(.+?)'(?=[을를은는이가도\s.,]|$)/.exec(text);
    var say = m ? m[1].replace(/_{2,}/g, 'the station') : '';
    var html = '<section class="card mission"><div class="m-big">🎯</div><p class="lead">' + esc(text) + '</p>' +
      (say ? '<button class="btn alt" data-act="say" data-w="' + esc(say) + '">🔊 문장 먼저 들어 보기</button>' : '') + '</section>' +
      (done ? '<div class="fb good"><b>이번 주 미션 완료! 🎉</b><p>다음 미션은 다음 주 월요일에 열려요.</p></div>' :
        '<button class="btn accent" data-act="missionDone">해봤어요! ✅ (+50점)</button>' +
        '<p class="muted small c">못 해도 괜찮아요. 일주일 안에 딱 한 번만 써 보면 돼요.</p>');
    return { title: '이번 주 실전 미션', html: html };
  };
  ACT.missionDone = function () {
    var wk = weekKey();
    if (S.missions[wk]) return;
    var idx = Object.keys(S.missions).length % Math.max(1, DATA.missions.length), q = [];
    S.missions[wk] = { idx: idx, date: today() };
    addXP(50, q);
    award('mission1', q);
    save();
    logEvent('mission', { idx: idx });
    q.unshift({ emoji: '🎯', title: '미션 성공!', text: '실제로 써 본 게 가장 큰 실력이에요. +50점' });
    rerender();
    celebrate(q);
  };

  /* ===== 내 기록 ===== */
  VIEWS.records = function () {
    var li = levelOf(S.xp), L = LEVELS[li];
    var days = Object.keys(S.days).filter(function (k) { return S.days[k].quiz > 0 || S.days[k].phrases.length > 0; }).length;
    var wk = weekKey(), tw = accOf(S.weekly[wk]), lw = accOf(S.weekly[addDays(wk, -7)]);
    var cmp = tw == null ? '이번 주에 게임을 하면 정답률이 여기에 나와요.' :
      '이번 주 정답률 <b>' + tw + '%</b>' + (lw != null ? ' (지난주 ' + lw + '%) ' + (tw > lw ? '⬆️' : tw < lw ? '💪' : '') : '');
    var rows = DATA.groups.map(function (g) {
      var st = gs(g.id);
      return '<li><span>' + g.emoji + ' ' + esc(g.title) + '</span><b>' + (st.plays ? '최고 ' + st.best + '% · ' + st.plays + '판' : '—') + '</b></li>';
    }).join('');
    var badges = badgeList().map(function (b) {
      var got = S.badges[b.id];
      return '<div class="badge ' + (got ? 'got' : '') + '"><div class="b-e">' + b.emoji + '</div><div class="b-n">' + esc(b.name) + '</div><div class="b-d">' + (got ? esc(b.desc) : '아직이에요') + '</div></div>';
    }).join('');
    var html = '<section class="card"><div class="stat-row"><div><b>' + L.emoji + ' ' + esc(L.name) + '</b><span>레벨</span></div>' +
      '<div><b>' + S.xp + '</b><span>점수</span></div><div><b>🔥 ' + streakNow() + '</b><span>연속 (최고 ' + S.streak.best + ')</span></div>' +
      '<div><b>' + days + '</b><span>공부한 날</span></div></div></section>' +
      '<section class="card"><h3>나와의 대결</h3><p>' + cmp + '</p></section>' +
      '<section class="card"><h3>소리 구분 기록</h3><ul class="plain">' + rows + '</ul></section>' +
      '<h3 class="sec">배지</h3><div class="badges">' + badges + '</div>';
    return { title: '내 기록', html: html };
  };

  /* ===== 설정 ===== */
  VIEWS.settings = function () {
    var s = S.settings;
    var seg = FONT_LABELS.map(function (l, i) {
      return '<button class="seg-b ' + (s.fs === i ? 'on' : '') + '" data-act="fs" data-i="' + i + '">' + l + '</button>';
    }).join('');
    var vopts = '<option value="">자동 (추천)</option>' + voices.map(function (v) {
      return '<option value="' + esc(v.voiceURI) + '"' + (s.voice === v.voiceURI ? ' selected' : '') + '>' + esc(v.name + ' (' + v.lang + ')') + '</option>';
    }).join('');
    var html = '<section class="card"><label class="setrow"><span>부르는 이름</span><input class="txt" maxlength="12" value="' + esc(s.name) + '" data-chg="name"></label>' +
      '<div class="setrow col"><span>글자 크기</span><div class="seg">' + seg + '</div></div>' +
      '<label class="setrow"><span>한글 발음 표기 보기</span><input type="checkbox" class="sw" ' + (s.ko ? 'checked' : '') + ' data-chg="ko"></label>' +
      '<label class="setrow"><span>효과음</span><input type="checkbox" class="sw" ' + (s.sfx ? 'checked' : '') + ' data-chg="sfx"></label>' +
      '<div class="setrow col"><span>영어 목소리</span><select class="txt" data-chg="voice"' + (voices.length ? '' : ' disabled') + '>' + vopts + '</select>' +
      (voices.length ? '' : '<small class="muted">사용할 수 있는 영어 음성이 아직 없어요.</small>') +
      '<button class="btn sm alt" data-act="say" data-w="Hello, how are you today?">🔊 소리 확인</button>' +
      '<small class="muted">소리가 안 나면: 아이폰 옆 무음 스위치(주황색이 보이면 무음)와 볼륨을 확인하고, Safari에서 열어 보세요.</small></div></section>' +
      '<section class="card"><p class="muted small">단어·문장 출처: ' + esc(dataSource) + '<br>진도는 이 기기에 저장돼요.</p>' +
      '<button class="btn ghost" data-act="reset">🗑️ 처음부터 다시 시작</button></section>';
    return { title: '설정', html: html };
  };
  CHG.name = function (v) { S.settings.name = (v || '').trim() || '어머니'; save(); };
  CHG.ko = function (v, el, c) { S.settings.ko = c; save(); };
  CHG.sfx = function (v, el, c) { S.settings.sfx = c; save(); };
  CHG.voice = function (v) { S.settings.voice = v; save(); };
  ACT.fs = function (d) { S.settings.fs = Number(d.i); save(); rerender(); };
  ACT.reset = function () {
    if (window.confirm('모든 진도와 기록이 지워져요. 정말 처음부터 다시 할까요?')) {
      S = defaults(); save(); go('home'); toast('처음부터 다시 시작해요');
    }
  };

  /* ===== 공통 동작 ===== */
  ACT.go = function (d) { go(d.v, { gid: d.gid, id: d.id }); };
  ACT.back = function () { go(PARENT[ui.view] || 'home'); };
  ACT.say = function (d) { speak(d.w, ui.slow ? 0.55 : 0.85); };
  ACT.toggleSlow = function (d, el) {
    ui.slow = !ui.slow;
    el.classList.toggle('on', ui.slow);
    el.textContent = ui.slow ? '🐢 천천히: 켜짐' : '🐢 천천히: 꺼짐';
  };
  ACT.modalnext = function () { nextModal(); };

  // 처음 화면을 누를 때 음성 기능을 깨워 둬요 (아이폰은 첫 터치가 있어야 소리가 나요)
  var SILENT = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';
  var speechUnlocked = false;
  document.addEventListener('click', function () {
    if (speechUnlocked) return;
    speechUnlocked = true;
    [player, myPlayer].forEach(function (a) {
      try {
        a.src = SILENT;
        var pr = a.play();
        if (pr && pr.catch) pr.catch(function () {});
      } catch (e) {}
    });
    try {
      var s = window.speechSynthesis;
      if (s && typeof SpeechSynthesisUtterance !== 'undefined') {
        var u = new SpeechSynthesisUtterance(' ');
        u.volume = 0;
        s.speak(u);
      }
    } catch (e) {}
  }, true);
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-act]') : null;
    if (!el || el.disabled) return;
    var f = ACT[el.getAttribute('data-act')];
    if (f) f(el.dataset, el);
  });
  document.addEventListener('change', function (e) {
    var el = e.target.closest ? e.target.closest('[data-chg]') : null;
    if (!el) return;
    var f = CHG[el.getAttribute('data-chg')];
    if (f) f(el.value, el, el.checked);
  });
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden && ui.view === 'home') render(true);
  });

  /* ===== 구글 시트에서 불러오기 (선택) ===== */
  function parseCSV(text) {
    var rows = [], row = [], cur = '', q = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (q) {
        if (c === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else q = false; }
        else cur += c;
      } else if (c === '"') q = true;
      else if (c === ',') { row.push(cur); cur = ''; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && text[i + 1] === '\n') i++;
        row.push(cur); cur = '';
        if (row.some(function (x) { return x !== ''; })) rows.push(row);
        row = [];
      } else cur += c;
    }
    if (cur !== '' || row.length) { row.push(cur); if (row.some(function (x) { return x !== ''; })) rows.push(row); }
    return rows;
  }
  async function fetchSheet(name) {
    var url = 'https://docs.google.com/spreadsheets/d/' + encodeURIComponent(CFG.SHEET_ID) + '/gviz/tq?tqx=out:csv&sheet=' + encodeURIComponent(name);
    var r = await fetch(url);
    if (!r.ok) throw new Error(name + ' ' + r.status);
    var rows = parseCSV(await r.text());
    var head = rows.shift().map(function (s) { return s.trim(); });
    return rows.map(function (cells) {
      var o = {};
      head.forEach(function (h, i) { o[h] = (cells[i] || '').trim(); });
      return o;
    });
  }
  function buildData(g, p, ph, m) {
    var next = {
      groups: g.map(function (r) { return { id: r.id, title: r.title, emoji: r.emoji || '🔤', core: /^(true|1|y|yes)$/i.test(r.core), tip: r.tip || '' }; }),
      pairs: p.map(function (r) { return { g: r.group, a: r.a, aKo: r.a_ko, aEx: r.a_ex, b: r.b, bKo: r.b_ko, bEx: r.b_ex }; })
        .filter(function (x) { return x.g && x.a && x.b; }),
      phrases: ph.map(function (r) { return { id: r.id, en: r.en, ko: r.ko, when: r.when, sound: r.sound }; }).filter(function (x) { return x.id && x.en; }),
      missions: m.map(function (r) { return r.mission; }).filter(Boolean)
    };
    next.groups = next.groups.filter(function (x) {
      return x.id && x.title && next.pairs.filter(function (pp) { return pp.g === x.id; }).length >= 2;
    });
    if (!next.groups.length) throw new Error('시트에 쓸 수 있는 그룹이 없어요');
    if (!next.phrases.length) next.phrases = DATA.phrases;
    if (!next.missions.length) next.missions = DATA.missions;
    return next;
  }
  function refreshAfterLoad() {
    if (['home', 'pairs', 'phrases', 'records', 'settings', 'mission'].indexOf(ui.view) >= 0) rerender();
  }
  async function loadSheet() {
    if (!CFG.SHEET_ID) return;
    try {
      var cached = localStorage.getItem(SHEET_CACHE_KEY);
      if (cached) { DATA = JSON.parse(cached); dataSource = '구글 시트 (저장된 사본)'; refreshAfterLoad(); }
    } catch (e) {}
    try {
      var res = await Promise.all(['groups', 'pairs', 'phrases', 'missions'].map(fetchSheet));
      DATA = buildData(res[0], res[1], res[2], res[3]);
      dataSource = '구글 시트';
      try { localStorage.setItem(SHEET_CACHE_KEY, JSON.stringify(DATA)); } catch (e) {}
      refreshAfterLoad();
    } catch (err) {
      if (window.console) console.warn('구글 시트를 불러오지 못해서 기존 데이터를 써요:', err);
    }
  }

  /* ===== 시작 ===== */
  S = load();
  loadClips();
  applyFont();
  render(false);
  loadSheet();

  // 테스트용으로만 쓰는 연결 고리 (앱 동작에는 영향 없음)
  window.__app = { get S() { return S; }, ui: ui, ACT: ACT, go: go, today: today };
})();
