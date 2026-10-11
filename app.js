(function () {
  'use strict';

  /* ===== 기본 설정 ===== */
  var CFG = window.APP_CONFIG || {};
  var DATA = JSON.parse(JSON.stringify(window.DEFAULT_DATA));
  var dataSource = '내장 데이터';
  var KEY = 'eng-mom-v1';
  var SHEET_CACHE_KEY = 'eng-mom-sheet-v2';

  // 레벨 = 캐나다 생활 칭호
  var LEVELS = [
    { name: '새내기', xp: 0 },
    { name: '인사 달인', xp: 150 },
    { name: '카페 단골', xp: 400 },
    { name: '마트 프로', xp: 800 },
    { name: '버스 척척', xp: 1300 },
    { name: '병원도 OK', xp: 2000 },
    { name: '은행 업무 OK', xp: 3000 },
    { name: '스몰톡 고수', xp: 4200 },
    { name: '캐나다 베테랑', xp: 5600 },
    { name: '토론토 토박이', xp: 7500 }
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
      groups: {}, places: {}, phrases: {}, badges: {}, missions: {}, weekly: {},
      wxp: {}, beat: {}, rec: { combo: 0 }
    };
  }
  var S = defaults();
  function load() {
    try {
      var r = JSON.parse(localStorage.getItem(KEY));
      if (r && r.v === 1) {
        var out = Object.assign(defaults(), r);
        out.settings = Object.assign(defaults().settings, r.settings || {});
        out.rec = Object.assign({ combo: 0 }, r.rec || {});
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
  function blankStat() { return { plays: 0, best: 0, last: null, hist: [] }; }
  function gs(id) { return S.groups[id] || blankStat(); }
  function ps(id) { return S.places[id] || blankStat(); }
  function streakNow() {
    var t = today();
    return (S.streak.last === t || S.streak.last === addDays(t, -1)) ? S.streak.count : 0;
  }
  function starsOf(st) { return !st.plays ? 0 : st.best >= 90 ? 3 : st.best >= 70 ? 2 : 1; }

  /* ===== 데이터 접근 ===== */
  function gById(id) { return DATA.groups.filter(function (g) { return g.id === id; })[0]; }
  function pairsOf(id) { return DATA.pairs.filter(function (p) { return p.g === id; }); }
  function coreGroups() { return DATA.groups.filter(function (g, i) { return g.core || i < 3; }); }
  function bonusUnlocked() { return coreGroups().every(function (g) { return gs(g.id).plays > 0; }); }
  // 스테이지: 앞 스테이지를 한 판 하면 다음 스테이지가 열려요
  function groupUnlocked(g) {
    var i = DATA.groups.indexOf(g);
    if (i < 3 || g.core) return true;
    return gs(DATA.groups[i - 1].id).plays > 0;
  }
  function placeById(id) { return DATA.places.filter(function (p) { return p.id === id; })[0]; }
  function phrasesOf(pid) { return DATA.phrases.filter(function (p) { return p.place === pid; }); }
  function phraseOk(p) { return (S.phrases[p.id] || {}).ok || 0; }
  function masteredCount(list) { return list.filter(function (p) { return phraseOk(p) >= 3; }).length; }
  function totalStars() {
    var n = 0;
    DATA.groups.forEach(function (g) { n += starsOf(gs(g.id)); });
    DATA.places.forEach(function (p) { n += starsOf(ps(p.id)); });
    return n;
  }
  function maxStars() { return 3 * (DATA.groups.length + DATA.places.length); }
  function wxpOf(k) { return S.wxp[k] || 0; }
  function mult(c) { return c >= 6 ? 3 : c >= 3 ? 2 : 1; }

  /* ===== 아이콘 (직접 그린 선 아이콘) ===== */
  var ICONS = {
    headphones: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="6.5" rx="1.6"/><rect x="17" y="14" width="4" height="6.5" rx="1.6"/>',
    chat: '<path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/><path d="M8 10h8M8 13h5"/>',
    pin: '<path d="M12 21s-6.5-5.6-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21z"/><circle cx="12" cy="10.5" r="2.4"/>',
    medal: '<circle cx="12" cy="9" r="5.5"/><path d="M8.6 13.4L7 21l5-2.6 5 2.6-1.6-7.6"/>',
    sliders: '<path d="M4 7h9M19 7h1M4 17h1M11 17h9"/><circle cx="16" cy="7" r="2.3"/><circle cx="8" cy="17" r="2.3"/>',
    speaker: '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.6 9a4.2 4.2 0 0 1 0 6M18.2 6.4a8 8 0 0 1 0 11.2"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3"/>',
    stop: '<rect x="6.5" y="6.5" width="11" height="11" rx="2"/>',
    play: '<path d="M8 5.5v13l11-6.5z"/>',
    repeat: '<path d="M4 11a6 6 0 0 1 10.5-4L17 9M20 13a6 6 0 0 1-10.5 4L7 15"/><path d="M17 4.5V9h-4.5M7 19.5V15h4.5"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
    unlock: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 7.4-2"/>',
    chevL: '<path d="M15 5l-7 7 7 7"/>',
    chevR: '<path d="M9 5l7 7-7 7"/>',
    flame: '<path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3.2 2-4.2.2 1.4.9 2.2 1.8 2.6C10.3 8.5 10.6 5.5 12 3z"/>',
    star: '<path d="M12 3.2l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.7 6.6 19.7l1.2-6L3.3 9.5l6.1-.7z"/>',
    sprout: '<path d="M12 21v-9"/><path d="M12 12c0-4-3-6-7-6 0 4 3 6 7 6zM12 14c0-3.5 2.5-5.5 7-5.5 0 3.5-2.5 5.5-7 5.5z"/>',
    lifebuoy: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.6"/><path d="M6 6l3.4 3.4M18 6l-3.4 3.4M6 18l3.4-3.4M18 18l-3.4-3.4"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.7v.1"/>',
    caution: '<path d="M12 3l9.5 9L12 21 2.5 12z"/><path d="M12 8v5M12 16v.1"/>',
    trash: '<path d="M5 7h14M10 7V4.5h4V7M7 7l1 13h8l1-13"/>',
    cup: '<path d="M5 8h11v6a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16M8.5 3.5c0 1 1 1.3 1 2.3M12.5 3.5c0 1 1 1.3 1 2.3"/>',
    cart: '<path d="M3 4h2.5l2.2 11h10.6L20.5 7H6.6"/><circle cx="9" cy="19.5" r="1.4"/><circle cx="17" cy="19.5" r="1.4"/>',
    dish: '<path d="M7 3v6.5a2 2 0 0 0 2 2V21M11 3v6.5a2 2 0 0 1-2 2M9 3v5M16.5 21V3c-2 1.5-3 4-3 7.5h3"/>',
    cross: '<path d="M9.5 3.5h5v6h6v5h-6v6h-5v-6h-6v-5h6z"/>',
    bank: '<path d="M3 9.5L12 4l9 5.5zM5.5 10.5v7M10 10.5v7M14 10.5v7M18.5 10.5v7M3 20.5h18"/>',
    box: '<path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5z"/><path d="M3.5 7.5L12 12l8.5-4.5M12 12v9M7.8 5.3l8.4 4.5"/>',
    doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
    sign: '<path d="M12 3v18M8.5 21h7"/><path d="M5 5.5h11l2.5 2.5-2.5 2.5H5zM19 12.5H8l-2.5 2.5L8 17.5h11z"/>',
    phone: '<path d="M6.5 3.5h3l1.5 4.5-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4.5 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2z"/>',
    trophy: '<path d="M7.5 4h9v5a4.5 4.5 0 0 1-9 0z"/><path d="M7.5 6h-3a3 3 0 0 0 3 4M16.5 6h3a3 3 0 0 1-3 4M12 13.5V17M9.5 17h5v3.5h-5z"/>',
    bolt: '<path d="M13 2.5L5 13.5h6l-1 8 8-11h-6z"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>'
  };
  function ic(name, fill) {
    return '<svg class="ic' + (fill ? ' fill' : '') + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + (ICONS[name] || '') + '</svg>';
  }
  // 레벨 표지 (고속도로 노선 표지판 모양)
  function crest(n) {
    return '<svg class="crest" viewBox="0 0 40 44" aria-hidden="true" focusable="false"><path d="M20 2l15 5v12c0 11-7 19-15 23C12 38 5 30 5 19V7z"/><text x="20" y="29" text-anchor="middle">' + n + '</text></svg>';
  }
  function emblem(g) { return String(g.id).replace(/_/g, '/').slice(0, 6); }
  function stars(n, cls) {
    var h = '<span class="st ' + (cls || '') + '" aria-label="별 ' + n + '개">';
    for (var k = 0; k < 3; k++) h += '<span class="' + (k < n ? 'on' : 'off') + '">' + ic('star', true) + '</span>';
    return h + '</span>';
  }

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
    var wk = weekKey();
    S.wxp[wk] = wxpOf(wk) + n;
    var after = levelOf(S.xp);
    if (after > before) {
      q.push({ icon: crest(after + 1), title: '레벨 업! ' + LEVELS[after].name, text: '새 칭호를 얻었어요. 다음 칭호까지 ' + (LEVELS[after + 1] ? (LEVELS[after + 1].xp - S.xp) + '점!' : '— 최고 칭호예요!') });
    }
    // 지난주의 나를 넘어서면 한 번 축하해요
    var lw = wxpOf(addDays(wk, -7));
    if (lw > 0 && S.wxp[wk] > lw && !S.beat[wk]) {
      S.beat[wk] = 1;
      q.push({ icon: ic('trophy'), title: '지난주의 나를 이겼어요!', text: '이번 주 ' + S.wxp[wk] + '점, 지난주 ' + lw + '점. 계속 앞서가 볼까요?' });
      award('beat_week', q);
    }
  }
  function badgeList() {
    return [
      { id: 'first_quiz', icon: 'sprout', name: '첫 걸음', desc: '소리 구분 게임을 처음 끝냈어요' },
      { id: 'first_listen', icon: 'headphones', name: '실전 귀 열기', desc: '실전 듣기 게임을 처음 끝냈어요' },
      { id: 'first_rec', icon: 'mic', name: '첫 녹음', desc: '내 목소리를 처음 녹음했어요' },
      { id: 'perfect', text: '100', name: '퍼펙트', desc: '한 판을 전부 한 번에 맞혔어요' },
      { id: 'combo5', icon: 'bolt', name: '콤보 5', desc: '5문제 연속으로 맞혔어요' },
      { id: 'combo10', icon: 'bolt', name: '콤보 10', desc: '10문제 연속으로 맞혔어요' },
      { id: 'streak3', icon: 'flame', name: '3일 연속', desc: '3일 연속으로 오늘 목표를 끝냈어요' },
      { id: 'streak7', icon: 'flame', name: '7일 연속', desc: '7일 연속으로 오늘 목표를 끝냈어요' },
      { id: 'beat_week', icon: 'trophy', name: '나를 넘어서', desc: '지난주의 나보다 점수를 더 얻었어요' },
      { id: 'stars15', icon: 'star', name: '별 15개', desc: '게임 별을 15개 모았어요' },
      { id: 'stars40', icon: 'star', name: '별 40개', desc: '게임 별을 40개 모았어요' },
      { id: 'phrase10', icon: 'chat', name: '표현 10개', desc: '표현 10개를 마스터했어요' },
      { id: 'rescue', icon: 'lifebuoy', name: '구조 요청 마스터', desc: '되물을 때 표현을 모두 마스터했어요' },
      { id: 'mission1', icon: 'pin', name: '실전 용사', desc: '실전 미션을 처음 해냈어요' },
      { id: 'bonus', icon: 'unlock', name: '스테이지 확장', desc: '첫 세 스테이지를 모두 해 봤어요' },
      { id: 'allstages', icon: 'grid', name: '전 스테이지 도전', desc: '소리 구분 스테이지를 모두 해 봤어요' }
    ];
  }
  function badgeIcon(b) { return b.text ? '<span class="b-txt">' + esc(b.text) + '</span>' : ic(b.icon, b.icon === 'star' || b.icon === 'bolt'); }
  function award(id, q) {
    if (S.badges[id]) return;
    var b = badgeList().filter(function (x) { return x.id === id; })[0];
    if (!b) return;
    S.badges[id] = today();
    q.push({ icon: badgeIcon(b), title: '새 배지! ' + b.name, text: b.desc + ' (+20점)' });
    addXP(20, q);
  }
  function checkStars(q) {
    var n = totalStars();
    if (n >= 15) award('stars15', q);
    if (n >= 40) award('stars40', q);
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
      q.push({ icon: ic('flame'), title: '오늘 목표 완료!', text: S.streak.count + '일 연속! 보너스 +30점' });
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
          toast('소리 버튼을 눌러서 들어 보세요');
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
    m.innerHTML = '<div class="pop sign" role="dialog" aria-live="assertive"><div class="sign-in"><div class="pop-ic">' + it.icon + '</div><h3>' +
      esc(it.title) + '</h3><p>' + esc(it.text) + '</p><button class="btn light" data-act="modalnext">' +
      (modalQ.length ? '다음' : '확인') + '</button></div></div>';
  }
  var toastT;
  function toast(msg) {
    var t = $('#toast');
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastT);
    toastT = setTimeout(function () { t.hidden = true; }, 2400);
  }

  /* ===== 화면 이동 ===== */
  var PARENT = { pairs: 'home', listen: 'pairs', phrases: 'home', place: 'phrases', mission: 'home', records: 'home', settings: 'home' };
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
    if (!back) {
      return '<header class="top home-top"><h2>' + esc(title) + '</h2>' +
        '<button class="iconbtn" data-act="go" data-v="settings" aria-label="설정">' + ic('sliders') + '</button></header>';
    }
    return '<header class="top"><button class="back" data-act="back" aria-label="뒤로">' + ic('chevL') + '<span>뒤로</span></button>' +
      '<h2>' + esc(title) + '</h2></header>';
  }
  function render(keep) {
    var y = window.scrollY;
    var fn = VIEWS[ui.view] || VIEWS.home;
    var out = fn(ui.params);
    $('#app').innerHTML = header(out.title, ui.view !== 'home') + '<main class="view">' + out.html + '</main>';
    document.body.setAttribute('data-view', ui.view);
    applyFont();
    if (keep) window.scrollTo(0, y);
    if (out.after) out.after();
  }
  function rerender() { render(true); }

  /* ===== 홈 ===== */
  function greeting() {
    var h = new Date().getHours();
    if (h >= 5 && h < 12) return ['Good morning', '좋은 아침이에요'];
    if (h >= 12 && h < 17) return ['Good afternoon', '좋은 오후예요'];
    return ['Good evening', '좋은 저녁이에요'];
  }
  ACT.greet = function () { speak(greeting()[0], 0.85); };

  // "바로 한 판": 오늘 할 게임을 골라 줘요 (안 해 본 스테이지 → 별이 적은 곳)
  function pickNext(list, statFn, openFn) {
    var open = list.filter(openFn || function () { return true; });
    var fresh = open.filter(function (x) { return !statFn(x.id).plays; })[0];
    if (fresh) return fresh;
    return open.slice().sort(function (a, b) {
      var sa = statFn(a.id), sb = statFn(b.id);
      return (starsOf(sa) - starsOf(sb)) || (sa.best - sb.best);
    })[0];
  }
  ACT.quick = function () {
    var d = peekDay();
    var listenPlaces = DATA.places.filter(function (p) { return phrasesOf(p.id).length >= 3; });
    if (d.quiz % 2 === 1 && listenPlaces.length) {
      var pl = pickNext(listenPlaces, ps);
      if (pl) return ACT.startListen({ pid: pl.id });
    }
    var g = pickNext(DATA.groups, gs, function (x) { return groupUnlocked(x) && pairsOf(x.id).length >= 2; });
    if (g) ACT.startQuiz({ gid: g.id });
  };

  VIEWS.home = function () {
    var li = levelOf(S.xp), L = LEVELS[li], N = LEVELS[li + 1];
    var pct = N ? Math.round(100 * (S.xp - L.xp) / (N.xp - L.xp)) : 100;
    var d = peekDay();
    var st = streakNow();
    var wk = weekKey();
    var missionNew = !S.missions[wk];
    var gr = greeting();
    var tw = wxpOf(wk), lw = wxpOf(addDays(wk, -7));
    var top = Math.max(tw, lw, 1);
    var raceMsg = lw === 0 ? '이번 주 점수가 다음 주의 상대가 돼요.' :
      tw > lw ? '지난주의 나보다 <b>' + (tw - lw) + '점</b> 앞서고 있어요!' :
        '<b>' + (lw - tw + 1) + '점</b>만 더 얻으면 지난주의 나를 이겨요.';
    var openStages = DATA.groups.filter(groupUnlocked).length;
    var allPh = DATA.phrases.length, mst = masteredCount(DATA.phrases);
    function goal(ok, label, prog) {
      return '<li class="' + (ok ? 'done' : '') + '"><span class="chk">' + (ok ? ic('check') : '') + '</span><span class="t">' + label + '</span><b>' + prog + '</b></li>';
    }
    function row(v, pic, color, title, sub) {
      return '<button class="menu-btn" data-act="go" data-v="' + v + '"><span class="pic ' + color + '">' + ic(pic) + '</span>' +
        '<span class="mt"><b>' + title + '</b><small>' + sub + '</small></span>' + ic('chevR') + '</button>';
    }
    var html =
      '<section class="sign hello"><div class="sign-in">' +
      '<button class="greet" data-act="greet" aria-label="인사말 듣기"><span class="en" lang="en">' + gr[0] + '</span><span class="spk">' + ic('speaker') + '</span></button>' +
      '<p class="ko">' + gr[1] + ', ' + esc(S.settings.name) + '</p>' +
      '<div class="lv"><span class="crest-wrap">' + crest(li + 1) + '</span>' +
      '<div class="lv-main"><div class="lv-name">' + esc(L.name) + '</div><div class="road"><i style="width:' + pct + '%"></i></div>' +
      '<div class="lv-sub">' + (N ? '다음 칭호까지 ' + (N.xp - S.xp) + '점' : '최고 칭호예요') + '</div></div>' +
      '<div class="streak" title="연속 학습일">' + ic('flame', true) + '<b>' + st + '</b><span>일 연속</span></div></div>' +
      '</div></section>' +
      '<section class="panel race"><div class="race-h"><h3>나 vs 지난주의 나</h3><span class="tot">' + ic('star', true) + totalStars() + '</span></div>' +
      '<div class="lane"><span class="who">지난주</span><div class="bar ghost"><i style="width:' + Math.round(100 * lw / top) + '%"></i></div><b>' + lw + '</b></div>' +
      '<div class="lane me"><span class="who">이번 주</span><div class="bar"><i style="width:' + Math.round(100 * tw / top) + '%"></i></div><b>' + tw + '</b></div>' +
      '<p class="race-msg">' + raceMsg + '</p></section>' +
      '<section class="panel goals"><h3>오늘 할 일</h3><ul>' +
      goal(d.quiz >= GOAL_QUIZ, '게임 1판', Math.min(d.quiz, GOAL_QUIZ) + '/' + GOAL_QUIZ) +
      goal(d.phrases.length >= GOAL_PHRASES, '표현 2개 따라 하기', Math.min(d.phrases.length, GOAL_PHRASES) + '/' + GOAL_PHRASES) +
      '</ul>' + (d.done ? '<p class="done-msg">오늘 목표 끝! 더 하면 점수가 계속 쌓여요.</p>' :
        '<p class="hint">둘 다 끝내면 ' + (st + 1) + '일 연속이 돼요 (+30점)</p>') +
      '<button class="btn accent cta" data-act="quick">' + ic('play', true) + '<span>바로 한 판 하기</span></button></section>' +
      '<nav class="menu">' +
      row('pairs', 'headphones', 'blue', '소리 구분 게임', '스테이지 ' + openStages + '/' + DATA.groups.length + ' 열림') +
      row('phrases', 'chat', 'blue', '실전 영어', DATA.places.length + '곳 · 표현 마스터 ' + mst + '/' + allPh) +
      row('mission', 'pin', 'brown', '이번 주 실전 미션', missionNew ? '새 미션이 기다려요' : '이번 주 미션 완료') +
      row('records', 'medal', 'blue', '내 기록', '배지 ' + Object.keys(S.badges).filter(function (k) { return badgeList().some(function (b) { return b.id === k; }); }).length + '/' + badgeList().length + ' · 최고 콤보 ' + S.rec.combo) +
      '</nav>';
    return { title: '영어 한 걸음', html: html };
  };

  /* ===== 소리 구분: 스테이지 목록 ===== */
  VIEWS.pairs = function () {
    var cards = DATA.groups.map(function (g, i) {
      var st = gs(g.id), open = groupUnlocked(g), n = pairsOf(g.id).length, s = starsOf(st);
      var sub = !open ? '앞 스테이지를 한 판 하면 열려요' : (st.plays ? '최고 ' + st.best + '% · ' + st.plays + '판' : '아직 안 해 봤어요');
      return '<section class="panel group ' + (open ? '' : 'locked ') + (s === 3 ? 'cleared' : '') + '"><div class="g-head">' +
        '<span class="emblem">' + (open ? esc(emblem(g)) : ic('lock')) + '</span><div class="g-t"><h3>' +
        esc(g.title) + '</h3><p class="sub"><span class="stage-no">스테이지 ' + (i + 1) + '</span>' + (open ? stars(s) : '') + '<span>' + sub + '</span></p></div></div>' +
        (open && n >= 2 ? '<div class="row"><button class="btn alt" data-act="go" data-v="listen" data-gid="' + esc(g.id) + '">' + ic('headphones') + '<span>들어 보기</span></button>' +
          '<button class="btn" data-act="startQuiz" data-gid="' + esc(g.id) + '">' + ic('play', true) + '<span>게임 시작</span></button></div>' : '') + '</section>';
    }).join('');
    var got = DATA.groups.reduce(function (a, g) { return a + starsOf(gs(g.id)); }, 0);
    var html = '<p class="lead">먼저 <b>들어 보기</b>로 두 소리를 비교하고, <b>게임</b>으로 확인해요. 연속으로 맞히면 <b>콤보 점수</b>가 2배, 3배! 틀려도 감점은 없어요.</p>' +
      '<p class="muted c mcount">' + ic('star', true) + ' 별 ' + got + ' / ' + DATA.groups.length * 3 + ' · 90% 이상이면 별 3개</p>' + cards;
    return { title: '소리 구분 게임', html: html };
  };

  /* ===== 소리 구분: 들어 보기 ===== */
  VIEWS.listen = function (p) {
    var g = gById(p.gid);
    if (!g) return VIEWS.pairs();
    var rows = pairsOf(g.id).map(function (x) {
      function tile(w, k) {
        return '<button class="tile" data-act="say" data-w="' + esc(w) + '"><span class="w" lang="en">' + esc(w) + '</span><span class="k">' + esc(k) + '</span><span class="sp">' + ic('speaker') + '</span></button>';
      }
      function ex(t) { return t ? '<button class="ex" data-act="say" data-w="' + esc(t) + '">' + ic('speaker') + '<span lang="en">' + esc(t) + '</span></button>' : ''; }
      return '<div class="pair"><div class="row">' + tile(x.a, x.aKo) + tile(x.b, x.bKo) + '</div>' + ex(x.aEx) + ex(x.bEx) + '</div>';
    }).join('');
    var html = '<section class="panel tip"><h3>' + ic('info') + '<span>입 모양 팁</span></h3><p>' + esc(g.tip) + '</p></section>' +
      '<div class="toolbar"><p class="muted small">단어를 눌러서 두 소리를 번갈아 들어 보세요.</p>' +
      '<button class="pill ' + (ui.slow ? 'on' : '') + '" data-act="toggleSlow" aria-pressed="' + (ui.slow ? 'true' : 'false') + '"><span class="lbl">' + (ui.slow ? '천천히: 켜짐' : '천천히: 꺼짐') + '</span></button></div>' +
      rows +
      '<button class="btn" data-act="startQuiz" data-gid="' + esc(g.id) + '">' + ic('play', true) + '<span>게임 시작</span></button>';
    return { title: g.title, html: html };
  };

  /* ===== 게임 (소리 구분 / 실전 듣기 공통) ===== */
  function newQ(kind, id, items) {
    return { kind: kind, id: id, queue: items, i: 0, total: items.length, first: 0, combo: 0, maxCombo: 0, pts: 0, gain: 0,
      answered: false, last: null, xp0: S.xp, stars0: totalStars() };
  }
  ACT.startQuiz = function (d) {
    var g = gById(d.gid);
    var ps0 = g ? pairsOf(g.id) : [];
    if (ps0.length < 2) { toast('문제가 부족해요'); return; }
    var first = gs(g.id).plays === 0;
    var pool = first ? ps0.slice(0, Math.min(4, ps0.length)) : ps0; // 처음엔 쉬운 단어만
    var items = [];
    pool.forEach(function (p) { items.push({ p: p, t: 'a' }); items.push({ p: p, t: 'b' }); });
    items = shuffle(items).slice(0, Math.min(first ? 6 : 10, items.length));
    Q = newQ('pair', g.id, items);
    go('quiz');
  };
  function listenItem(p, all) {
    var others = shuffle(all.filter(function (x) { return x !== p && x.ko !== p.ko; })).slice(0, 2);
    return { p: p, opts: shuffle([p].concat(others)) };
  }
  ACT.startListen = function (d) {
    var pl = placeById(d.pid), all = pl ? phrasesOf(pl.id) : [];
    if (all.length < 3) { toast('문제가 부족해요'); return; }
    var first = ps(pl.id).plays === 0;
    var pool = shuffle(all.filter(function (x) { return x.who === 'them'; })).concat(shuffle(all.filter(function (x) { return x.who !== 'them'; })));
    var items = shuffle(pool.slice(0, first ? 6 : 8)).map(function (p) { return listenItem(p, all); });
    Q = newQ('place', pl.id, items);
    go('quiz');
  };
  function curText() {
    var it = Q.queue[Q.i];
    return Q.kind === 'place' ? it.p.en : (it.t === 'a' ? it.p.a : it.p.b);
  }
  function qTitle() {
    if (Q.kind === 'place') return '듣기: ' + (placeById(Q.id) || { title: '' }).title;
    return (gById(Q.id) || { title: '게임' }).title;
  }
  function sayBtn(t, cls) {
    return '<button class="ex ' + (cls || '') + '" data-act="say" data-w="' + esc(t) + '">' + ic('speaker') + '<span lang="en">' + esc(t) + '</span></button>';
  }

  VIEWS.quiz = function () {
    if (!Q) return VIEWS.home();
    var it = Q.queue[Q.i];
    var total = Q.queue.length;
    var pct = Math.round(100 * Q.i / total);
    var m = mult(Q.combo);
    var meta = '<div class="qbar"><div class="road dark"><i style="width:' + pct + '%"></i></div>' +
      '<div class="qmeta"><span class="qn">문제 ' + (Q.i + 1) + ' / ' + total + (it.retry ? ' · 복습' : '') + '</span>' +
      '<span class="combo-pill' + (Q.combo >= 3 ? ' hot' : '') + (Q.combo >= 6 ? ' max' : '') + '">' + ic('bolt', true) + '<span>' + Q.combo + ' 콤보</span>' + (m > 1 ? '<b>×' + m + '</b>' : '') + '</span>' +
      '<span class="qpts">' + Q.pts + '점</span></div></div>';
    var fb = '', ans, lead;

    if (Q.kind === 'place') {
      lead = '무슨 뜻일까요?';
      var correctIdx = it.opts.indexOf(it.p);
      ans = '<div class="opts">' + it.opts.map(function (o, k) {
        var cls = '', mk = '';
        if (Q.answered) {
          if (k === correctIdx) { cls = ' right'; mk = '<span class="mk">' + ic('check') + '</span>'; }
          else if (Q.last && Q.last.pick === k && !Q.last.ok) { cls = ' miss'; mk = '<span class="mk">' + ic('caution') + '</span>'; }
          else cls = ' dim';
        }
        return '<button class="opt' + cls + '" data-act="qans" data-pick="' + k + '"' + (Q.answered ? ' disabled' : '') + '><span>' + esc(o.ko) + '</span>' + mk + '</button>';
      }).join('') + '</div>';
      if (Q.answered) {
        fb = '<div class="fb ' + (Q.last.ok ? 'good' : 'try') + '"><span class="fi">' + ic(Q.last.ok ? 'check' : 'caution') + '</span><div class="fbt"><b>' +
          (Q.last.ok ? gainText() : '아깝다! 이런 뜻이에요') + '</b>' + sayBtn(it.p.en) + '<p>' + esc(it.p.ko) + '</p>' +
          (it.p.reply ? '<p class="reply-l">이렇게 대답해요</p>' + sayBtn(it.p.reply, 'reply') : '') +
          (!Q.last.ok && !it.retry ? '<p class="small">이 문제는 마지막에 한 번 더 나와요.</p>' : '') + '</div></div>';
      }
    } else {
      lead = '들려주는 소리는 어느 쪽일까요?';
      var p = it.p, word = it.t === 'a' ? p.a : p.b;
      if (it.flip === undefined) it.flip = Math.random() < 0.5;
      var order = it.flip ? ['b', 'a'] : ['a', 'b'];
      ans = '<div class="answers">' + order.map(function (s) {
        var w = s === 'a' ? p.a : p.b, k = s === 'a' ? p.aKo : p.bKo, cls = '', mk = '';
        if (Q.answered) {
          if (s === it.t) { cls = ' right'; mk = '<span class="mk">' + ic('check') + '</span>'; }
          else if (Q.last && Q.last.pick === s && !Q.last.ok) { cls = ' miss'; mk = '<span class="mk">' + ic('caution') + '</span>'; }
          else cls = ' dim';
        }
        return '<button class="ans' + cls + '" data-act="qans" data-pick="' + s + '"' + (Q.answered ? ' disabled' : '') + '>' + mk + '<span class="w" lang="en">' + esc(w) + '</span><span class="k">' + esc(k) + '</span></button>';
      }).join('') + '</div>';
      if (Q.answered) {
        var ex = it.t === 'a' ? p.aEx : p.bEx;
        var tk = it.t === 'a' ? p.aKo : p.bKo;
        if (Q.last.ok) {
          fb = '<div class="fb good"><span class="fi">' + ic('check') + '</span><div class="fbt"><b>' + gainText() + '</b>' +
            '<p><span lang="en">' + esc(word) + '</span> = ' + esc(tk) + '</p>' + (ex ? sayBtn(ex) : '') + '</div></div>';
        } else {
          fb = '<div class="fb try"><span class="fi">' + ic('caution') + '</span><div class="fbt"><b>아깝다! 두 소리를 비교해서 들어 봐요</b><div class="row">' +
            '<button class="btn alt" data-act="say" data-w="' + esc(p.a) + '">' + ic('speaker') + '<span lang="en">' + esc(p.a) + '</span></button>' +
            '<button class="btn alt" data-act="say" data-w="' + esc(p.b) + '">' + ic('speaker') + '<span lang="en">' + esc(p.b) + '</span></button></div>' +
            (it.retry ? '' : '<p class="small">이 문제는 마지막에 한 번 더 나와요.</p>') + '</div></div>';
        }
      }
    }
    if (Q.answered) fb += '<button class="btn" data-act="qnext"><span>' + (Q.i + 1 >= Q.queue.length ? '결과 보기' : '다음') + '</span>' + ic('chevR') + '</button>';
    var html = meta +
      '<p class="lead c qlead">' + lead + '</p>' +
      '<div class="c"><button class="play" data-act="qplay" aria-label="다시 듣기">' + ic('speaker') + '</button>' +
      '<div><button class="pill" data-act="qslow"><span class="lbl">천천히 듣기</span></button></div></div>' +
      ans + fb;
    return {
      title: qTitle(), html: html,
      after: function () {
        if (!Q.answered) { var t = curText(); setTimeout(function () { if (ui.view === 'quiz' && Q && !Q.answered) speak(t, 0.85); }, 250); }
        else { var f = document.querySelector('.fb'); if (f && f.scrollIntoView) f.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
      }
    };
  };
  function gainText() {
    var it = Q.queue[Q.i];
    if (it.retry) return '좋아요! 이번엔 맞혔어요 +' + Q.gain + '점';
    var m = mult(Q.combo);
    if (Q.combo === 3) return '콤보 돌입! 이제부터 점수 2배 +' + Q.gain + '점';
    if (Q.combo === 6) return '불타는 콤보! 이제부터 점수 3배 +' + Q.gain + '점';
    return '정답! +' + Q.gain + '점' + (m > 1 ? ' (×' + m + ')' : '');
  }
  ACT.qplay = function () { if (Q) speak(curText(), 0.85); };
  ACT.qslow = function () { if (Q) speak(curText(), 0.55); };
  ACT.qans = function (d) {
    if (!Q || Q.answered) return;
    var it = Q.queue[Q.i], q = [], ok, pick;
    if (Q.kind === 'place') { pick = Number(d.pick); ok = it.opts[pick] === it.p; }
    else { pick = d.pick; ok = pick === it.t; }
    Q.answered = true;
    Q.last = { ok: ok, pick: pick };
    Q.gain = 0;
    if (!it.retry) {
      var wk = weekRec(weekKey());
      wk.t++;
      if (ok) {
        wk.c++; Q.first++; Q.combo++;
        Q.maxCombo = Math.max(Q.maxCombo, Q.combo);
        Q.gain = 10 * mult(Q.combo);
      } else {
        Q.combo = 0;
        var again = Q.kind === 'place' ? listenItem(it.p, phrasesOf(Q.id)) : { p: it.p, t: it.t };
        again.retry = true;
        Q.queue.push(again);
      }
    } else if (ok) { Q.gain = 5; } else { Q.combo = 0; }
    if (Q.gain) { Q.pts += Q.gain; addXP(Q.gain, q); }
    beep(ok ? (Q.combo === 3 || Q.combo === 6 ? 'win' : 'ok') : 'try');
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
    var q = [], kind = Q.kind, id = Q.id;
    var bucket = kind === 'place' ? S.places : S.groups;
    if (!bucket[id]) bucket[id] = blankStat();
    var st = bucket[id];
    var acc = Math.round(100 * Q.first / Q.total);
    var prev = st.last, prevBest = st.best, prevStars = starsOf(st);
    st.plays++; st.last = acc; st.best = Math.max(st.best, acc);
    st.hist.push({ d: today(), acc: acc });
    if (st.hist.length > 30) st.hist.shift();
    addXP(20, q);
    var perfect = Q.first === Q.total;
    if (perfect) addXP(30, q);
    var comboRec = Q.maxCombo > (S.rec.combo || 0);
    if (comboRec) S.rec.combo = Q.maxCombo;
    dayRec().quiz++;
    award(kind === 'place' ? 'first_listen' : 'first_quiz', q);
    if (perfect) award('perfect', q);
    if (Q.maxCombo >= 5) award('combo5', q);
    if (Q.maxCombo >= 10) award('combo10', q);
    if (kind === 'pair') {
      if (bonusUnlocked()) award('bonus', q);
      if (DATA.groups.every(function (g) { return gs(g.id).plays > 0; })) award('allstages', q);
    }
    checkStars(q);
    checkDaily(q);
    var res = { kind: kind, id: id, acc: acc, prev: prev, prevBest: prevBest, xp: S.xp - Q.xp0, perfect: perfect,
      stars: starsOf(st), prevStars: prevStars, maxCombo: Q.maxCombo, comboRec: comboRec && Q.maxCombo >= 3 };
    save();
    logEvent(kind === 'place' ? 'listen' : 'quiz', { id: id, acc: acc });
    Q = null;
    go('result', res);
    if (acc >= 90) beep('win');
    if (q.length) celebrate(q);
  }
  VIEWS.result = function (r) {
    var isPlace = r.kind === 'place';
    var obj = isPlace ? placeById(r.id) : gById(r.id);
    var title = (obj || { title: '게임' }).title;
    var msg = r.perfect ? '퍼펙트! 모두 한 번에 맞혔어요.' :
      r.acc >= 70 ? '좋아요! 귀가 열리고 있어요.' : '괜찮아요! 처음엔 다 어려워요. 다시 들어 보고 도전해 봐요.';
    var cmp, rec = r.prev != null && r.acc > r.prevBest;
    if (r.prev == null) cmp = '첫 기록이에요. 다음 판에 이 점수를 넘어 보세요.';
    else if (rec) cmp = '최고 기록 ' + r.prevBest + '% → ' + r.acc + '%';
    else if (r.acc > r.prev) cmp = '지난번 ' + r.prev + '% → 이번 ' + r.acc + '%';
    else if (r.acc === r.prev) cmp = '지난번과 같아요 (' + r.prev + '%). 다음엔 한 단계 더!';
    else cmp = '지난번 ' + r.prev + '%, 이번 ' + r.acc + '%. 다시 하면 올라가요.';
    var shown = r.acc >= 90 ? 3 : r.acc >= 70 ? 2 : 1;
    var starRow = '';
    for (var k = 0; k < 3; k++) starRow += '<span class="' + (k < shown ? 'on' : 'off') + '" style="--d:' + (k * 0.18) + 's">' + ic('star', true) + '</span>';
    var next = null;
    if (!isPlace) {
      var gi = DATA.groups.indexOf(obj);
      var ng = DATA.groups[gi + 1];
      if (ng && groupUnlocked(ng)) next = ng;
    }
    var html = '<section class="sign result"><div class="sign-in">' + (rec ? '<span class="ribbon">신기록!</span>' : '') +
      '<div class="stars big">' + starRow + '</div>' +
      '<div class="big-acc">' + r.acc + '<small>%</small></div><p class="msg">' + msg + '</p><p class="cmp">' + cmp + '</p>' +
      '<div class="chips"><span class="chip gold">+' + r.xp + '점</span><span class="chip">' + ic('bolt', true) + '최고 콤보 ' + r.maxCombo + '</span>' +
      (r.comboRec ? '<span class="chip gold">콤보 신기록!</span>' : '') +
      (r.stars > r.prevStars ? '<span class="chip gold">' + ic('star', true) + ' 별 ' + r.prevStars + ' → ' + r.stars + '</span>' : '') + '</div>' +
      '</div></section>' +
      (next && r.acc >= 70 ? '<button class="btn accent" data-act="startQuiz" data-gid="' + esc(next.id) + '">' + ic('chevR') + '<span>다음 스테이지: ' + esc(next.title) + '</span></button>' : '') +
      (isPlace ? '<button class="btn" data-act="startListen" data-pid="' + esc(r.id) + '">' + ic('play', true) + '<span>한 판 더</span></button>' +
        '<button class="btn alt" data-act="go" data-v="place" data-pid="' + esc(r.id) + '">' + ic('chat') + '<span>표현 다시 보기</span></button>'
        : '<button class="btn" data-act="startQuiz" data-gid="' + esc(r.id) + '">' + ic('play', true) + '<span>한 판 더</span></button>' +
        '<button class="btn alt" data-act="go" data-v="listen" data-gid="' + esc(r.id) + '">' + ic('headphones') + '<span>소리 다시 들어 보기</span></button>') +
      '<button class="btn ghost" data-act="go" data-v="home"><span>처음으로</span></button>';
    return { title: title + ' 결과', html: html };
  };

  /* ===== 실전 영어: 장소 목록 ===== */
  VIEWS.phrases = function () {
    var tiles = DATA.places.map(function (pl) {
      var list = phrasesOf(pl.id);
      if (!list.length) return '';
      var m = masteredCount(list);
      return '<button class="place-tile' + (m === list.length ? ' done' : '') + '" data-act="go" data-v="place" data-pid="' + esc(pl.id) + '">' +
        '<span class="pic ' + (pl.id === 'rescue' ? 'red' : 'blue') + '">' + ic(ICONS[pl.icon] ? pl.icon : 'chat') + '</span>' +
        '<b>' + esc(pl.title) + '</b>' + stars(starsOf(ps(pl.id)), 'sm') +
        '<small>마스터 ' + m + '/' + list.length + '</small></button>';
    }).join('');
    var html = '<p class="lead">캐나다 생활에서 실제로 <b>듣는 말</b>과 <b>하는 말</b>이에요. 장소를 골라서 듣기 게임으로 별을 모으고, 따라 말하기로 마스터해 보세요.</p>' +
      '<p class="muted c mcount">표현 마스터 ' + masteredCount(DATA.phrases) + ' / ' + DATA.phrases.length + '</p>' +
      '<div class="places">' + tiles + '</div>';
    return { title: '실전 영어', html: html };
  };

  /* ===== 실전 영어: 장소 하나 ===== */
  function phraseCard(p) {
    var ok = phraseOk(p), n = Math.min(3, ok);
    return '<button class="phrase-card ' + (p.who === 'them' ? 'them' : 'me') + '" data-act="go" data-v="phrase" data-id="' + esc(p.id) + '"><div class="pc-main"><div class="en" lang="en">' + esc(p.en) +
      '</div><div class="ko">' + esc(p.ko) + '</div><div class="prog">' + stars(n, 'sm') + (ok >= 3 ? '<span class="mst">마스터</span>' : '') + '</div></div>' + ic('chevR') + '</button>';
  }
  VIEWS.place = function (p) {
    var pl = placeById(p.pid) || DATA.places[0];
    if (!pl) return VIEWS.phrases();
    var list = phrasesOf(pl.id);
    var mine = list.filter(function (x) { return x.who !== 'them'; }), theirs = list.filter(function (x) { return x.who === 'them'; });
    var st = ps(pl.id);
    var html = '<section class="panel place-head"><span class="pic ' + (pl.id === 'rescue' ? 'red' : 'blue') + '">' + ic(ICONS[pl.icon] ? pl.icon : 'chat') + '</span>' +
      '<div class="ph-t"><b>실전 듣기 게임</b><small>' + (st.plays ? stars(starsOf(st), 'sm') + ' 최고 ' + st.best + '%' : '영어를 듣고 뜻을 골라요') + '</small></div>' +
      (list.length >= 3 ? '<button class="btn sm" data-act="startListen" data-pid="' + esc(pl.id) + '">' + ic('play', true) + '<span>시작</span></button>' : '') + '</section>' +
      (theirs.length ? '<h3 class="sec">' + ic('headphones') + '<span>이런 말이 들려요</span></h3>' + theirs.map(phraseCard).join('') : '') +
      (mine.length ? '<h3 class="sec">' + ic('chat') + '<span>이렇게 말해요</span></h3>' + mine.map(phraseCard).join('') : '');
    return { title: pl.title, html: html };
  };

  /* ===== 따라 말하기 ===== */
  function curPhrase() {
    var id = ui.params.id;
    return DATA.phrases.filter(function (x) { return x.id === id; })[0] || DATA.phrases[0];
  }
  VIEWS.phrase = function () {
    var ph = curPhrase();
    if (!ph) return VIEWS.phrases();
    if (!R) R = newR();
    var canRec = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
    var okN = Math.min(3, phraseOk(ph));
    var list = phrasesOf(ph.place);
    var nextP = list[list.indexOf(ph) + 1];
    var them = ph.who === 'them';
    var html = '<section class="sign big-en"><div class="sign-in"><span class="tag">' + (them ? '이런 말이 들려요' : '이렇게 말해요') + '</span>' +
      '<div class="en" lang="en">' + esc(ph.en) + '</div><div class="ko-big">' + esc(ph.ko) + '</div>' +
      (S.settings.ko && ph.sound ? '<div class="sound">' + esc(ph.sound) + '</div>' : '') + '</div></section>' +
      '<p class="when">' + ic('info') + '<span>' + esc(ph.when) + '</span></p>' +
      (ph.reply ? '<div class="reply-box"><p class="reply-l">이렇게 대답해요</p>' + sayBtn(ph.reply, 'reply') + '</div>' : '') +
      '<p class="success">' + stars(okN, 'sm') + '<span>성공 ' + okN + ' / 3</span></p>' +
      '<div class="step"><span class="n">1</span><span>듣기</span></div>' +
      '<div class="row"><button class="btn" data-act="pplay">' + ic('speaker') + '<span>듣기</span></button><button class="btn alt" data-act="pslow">' + ic('speaker') + '<span>천천히</span></button></div>';
    if (canRec) {
      html += '<div class="step"><span class="n">2</span><span>따라 말하기 (녹음)</span></div>' +
        '<button class="btn rec ' + (R.recording ? 'on' : '') + '" data-act="rectoggle">' + (R.recording ? ic('stop', true) + '<span>그만 녹음하기</span>' : ic('mic') + '<span>녹음하고 따라 말하기</span>') + '</button>' +
        (R.recording ? '<p class="rec-now c"><i class="dot"></i>녹음 중… 말하고 나서 버튼을 눌러 주세요</p>' : '') +
        '<div class="step"><span class="n">3</span><span>내 목소리와 비교</span></div>' +
        '<div class="row"><button class="btn alt" data-act="myplay"' + (R.url ? '' : ' disabled') + '>' + ic('play', true) + '<span>내 목소리</span></button>' +
        '<button class="btn alt" data-act="compare"' + (R.url ? '' : ' disabled') + '>' + ic('repeat') + '<span>이어서 듣기</span></button></div>';
    } else {
      html += '<div class="step"><span class="n">2</span><span>소리 내어 따라 말하기</span></div><p class="muted">이 기기에서는 녹음을 쓸 수 없어요. 듣고 나서 작은 소리로라도 꼭 따라 말해 보세요.</p>';
    }
    html += '<div class="step"><span class="n">4</span><span>확인</span></div>';
    if (R.evald) {
      html += '<div class="fb ' + (R.ok ? 'good' : 'try') + '"><span class="fi">' + ic(R.ok ? 'check' : 'repeat') + '</span><div class="fbt"><b>' + (R.ok ? '잘했어요! +15점' : '좋아요, 다시 해 보는 게 중요해요! +5점') + '</b></div></div>' +
        (nextP ? '<button class="btn" data-act="go" data-v="phrase" data-id="' + esc(nextP.id) + '"><span>다음 표현</span>' + ic('chevR') + '</button>' : '<button class="btn" data-act="go" data-v="place" data-pid="' + esc(ph.place) + '"><span>표현 목록으로</span>' + ic('chevR') + '</button>') +
        '<button class="btn alt" data-act="again">' + ic('repeat') + '<span>한 번 더 연습</span></button>';
    } else {
      html += '<div class="row"><button class="btn" data-act="eval" data-ok="1">' + ic('check') + '<span>잘 됐어요</span></button><button class="btn alt" data-act="eval" data-ok="0">' + ic('repeat') + '<span>다시 해볼게요</span></button></div>';
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
    if (before < 3 && rec.ok >= 3) q.push({ icon: ic('star', true), title: '표현 마스터!', text: ph.en });
    var rescue = phrasesOf('rescue');
    if (rescue.length && rescue.every(function (x) { return phraseOk(x) >= 3; })) award('rescue', q);
    if (masteredCount(DATA.phrases) >= 10) award('phrase10', q);
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
    var html = '<section class="sign brown mission"><div class="sign-in"><div class="m-pic">' + ic('pin') + '</div><p class="m-text">' + esc(text) + '</p>' +
      (say ? '<button class="btn light" data-act="say" data-w="' + esc(say) + '">' + ic('speaker') + '<span>문장 먼저 들어 보기</span></button>' : '') + '</div></section>' +
      (done ? '<div class="fb good"><span class="fi">' + ic('check') + '</span><div class="fbt"><b>이번 주 미션 완료!</b><p>다음 미션은 다음 주 월요일에 열려요.</p></div></div>' :
        '<button class="btn accent" data-act="missionDone">' + ic('check') + '<span>해봤어요 (+50점)</span></button>' +
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
    q.unshift({ icon: ic('pin'), title: '미션 성공!', text: '실제로 써 본 게 가장 큰 실력이에요. +50점' });
    rerender();
    celebrate(q);
  };

  /* ===== 내 기록 ===== */
  VIEWS.records = function () {
    var li = levelOf(S.xp), L = LEVELS[li];
    var days = Object.keys(S.days).filter(function (k) { return S.days[k].quiz > 0 || S.days[k].phrases.length > 0; }).length;
    var wk = weekKey(), tw = accOf(S.weekly[wk]), lw = accOf(S.weekly[addDays(wk, -7)]);
    var bestWeek = Object.keys(S.wxp).reduce(function (a, k) { return Math.max(a, S.wxp[k]); }, 0);
    function li2(label, val) { return '<li><span class="rl">' + label + '</span><b>' + val + '</b></li>'; }
    var recs = li2(ic('bolt', true) + '최고 콤보', S.rec.combo + '연속') +
      li2(ic('star', true) + '모은 별', totalStars() + ' / ' + maxStars()) +
      li2(ic('chat') + '마스터한 표현', masteredCount(DATA.phrases) + ' / ' + DATA.phrases.length) +
      li2(ic('trophy') + '한 주 최고 점수', bestWeek + '점') +
      li2(ic('headphones') + '이번 주 정답률', tw == null ? '—' : tw + '%' + (lw != null ? ' (지난주 ' + lw + '%)' : ''));
    var rows = DATA.groups.map(function (g, i) {
      var st = gs(g.id);
      return '<li><span class="rl"><span class="emblem sm">' + esc(emblem(g)) + '</span>' + esc(g.title) + '</span><b>' + (st.plays ? stars(starsOf(st), 'sm') + ' ' + st.best + '%' : '—') + '</b></li>';
    }).join('');
    var prow = DATA.places.map(function (pl) {
      var st = ps(pl.id);
      return '<li><span class="rl">' + esc(pl.title) + '</span><b>' + (st.plays ? stars(starsOf(st), 'sm') + ' ' + st.best + '%' : '—') + '</b></li>';
    }).join('');
    var badges = badgeList().map(function (b) {
      var got = S.badges[b.id];
      return '<div class="badge ' + (got ? 'got' : '') + '"><div class="b-e">' + badgeIcon(b) + '</div><div class="b-n">' + esc(b.name) + '</div><div class="b-d">' + (got ? esc(b.desc) : '아직이에요') + '</div></div>';
    }).join('');
    var html = '<section class="panel stats"><div class="stat-row"><div><span class="lvmark">' + crest(li + 1) + '</span><b>' + esc(L.name) + '</b></div>' +
      '<div><b class="num">' + S.xp + '</b><span>점수</span></div><div><b class="num">' + streakNow() + '</b><span>연속 (최고 ' + S.streak.best + ')</span></div>' +
      '<div><b class="num">' + days + '</b><span>공부한 날</span></div></div></section>' +
      '<section class="panel"><h3>나의 최고 기록</h3><ul class="plain recs">' + recs + '</ul></section>' +
      '<section class="panel"><h3>소리 구분 스테이지</h3><ul class="plain">' + rows + '</ul></section>' +
      '<section class="panel"><h3>실전 듣기</h3><ul class="plain">' + prow + '</ul></section>' +
      '<h3 class="sec"><span>배지 ' + Object.keys(S.badges).filter(function (k) { return badgeList().some(function (b) { return b.id === k; }); }).length + ' / ' + badgeList().length + '</span></h3><div class="badges">' + badges + '</div>';
    return { title: '내 기록', html: html };
  };

  /* ===== 설정 ===== */
  VIEWS.settings = function () {
    var s = S.settings;
    var seg = FONT_LABELS.map(function (l, i) {
      return '<button class="seg-b ' + (s.fs === i ? 'on' : '') + '" data-act="fs" data-i="' + i + '" aria-pressed="' + (s.fs === i) + '">' + l + '</button>';
    }).join('');
    var vopts = '<option value="">자동 (추천)</option>' + voices.map(function (v) {
      return '<option value="' + esc(v.voiceURI) + '"' + (s.voice === v.voiceURI ? ' selected' : '') + '>' + esc(v.name + ' (' + v.lang + ')') + '</option>';
    }).join('');
    var html = '<section class="panel"><label class="setrow"><span>부르는 이름</span><input class="txt" maxlength="12" value="' + esc(s.name) + '" data-chg="name"></label>' +
      '<div class="setrow col"><span>글자 크기</span><div class="seg">' + seg + '</div></div>' +
      '<label class="setrow"><span>한글 발음 표기 보기</span><input type="checkbox" class="sw" ' + (s.ko ? 'checked' : '') + ' data-chg="ko"></label>' +
      '<label class="setrow"><span>효과음</span><input type="checkbox" class="sw" ' + (s.sfx ? 'checked' : '') + ' data-chg="sfx"></label></section>' +
      '<section class="panel"><div class="setrow col"><span>영어 소리</span>' +
      '<button class="btn alt" data-act="say" data-w="Hello, how are you today?">' + ic('speaker') + '<span>소리 확인</span></button>' +
      '<small class="muted">소리가 안 나면: 아이폰 옆 무음 스위치(주황색이 보이면 무음)와 볼륨을 확인하고, Safari에서 열어 보세요.</small></div>' +
      '<div class="setrow col"><span>기기 음성 (파일이 없는 문장용)</span><select class="txt" data-chg="voice"' + (voices.length ? '' : ' disabled') + '>' + vopts + '</select>' +
      (voices.length ? '' : '<small class="muted">사용할 수 있는 영어 음성이 아직 없어요.</small>') + '</div></section>' +
      '<section class="panel"><p class="muted small">단어·문장 출처: ' + esc(dataSource) + '<br>진도는 이 기기에 저장돼요.</p>' +
      '<button class="btn ghost danger" data-act="reset">' + ic('trash') + '<span>처음부터 다시 시작</span></button></section>';
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
  ACT.go = function (d) { go(d.v, { gid: d.gid, id: d.id, pid: d.pid }); };
  ACT.back = function () {
    var v = ui.view, p = ui.params || {};
    if (v === 'phrase') return go('place', { pid: (curPhrase() || {}).place });
    if (v === 'quiz' || v === 'result') {
      var kind = v === 'quiz' ? (Q && Q.kind) : p.kind, id = v === 'quiz' ? (Q && Q.id) : p.id;
      return kind === 'place' ? go('place', { pid: id }) : go('pairs');
    }
    go(PARENT[v] || 'home');
  };
  ACT.say = function (d) { speak(d.w, ui.slow ? 0.55 : 0.85); };
  ACT.toggleSlow = function (d, el) {
    ui.slow = !ui.slow;
    el.classList.toggle('on', ui.slow);
    el.setAttribute('aria-pressed', ui.slow ? 'true' : 'false');
    var l = el.querySelector('.lbl');
    if (l) l.textContent = ui.slow ? '천천히: 켜짐' : '천천히: 꺼짐';
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
  function buildData(g, p, ph, m, pl) {
    var next = {
      groups: g.map(function (r) { return { id: r.id, title: r.title, core: /^(true|1|y|yes)$/i.test(r.core), tip: r.tip || '' }; }),
      pairs: p.map(function (r) { return { g: r.group, a: r.a, aKo: r.a_ko, aEx: r.a_ex, b: r.b, bKo: r.b_ko, bEx: r.b_ex }; })
        .filter(function (x) { return x.g && x.a && x.b; }),
      phrases: ph.map(function (r) {
        return { id: r.id, place: r.place || '', who: r.who === 'them' ? 'them' : 'me', en: r.en, ko: r.ko, when: r.when, sound: r.sound || '', reply: r.reply || '' };
      }).filter(function (x) { return x.id && x.en; }),
      places: (pl || []).map(function (r) { return { id: r.id, title: r.title, icon: r.icon || 'chat' }; }).filter(function (x) { return x.id && x.title; }),
      missions: m.map(function (r) { return r.mission; }).filter(Boolean)
    };
    next.groups = next.groups.filter(function (x) {
      return x.id && x.title && next.pairs.filter(function (pp) { return pp.g === x.id; }).length >= 2;
    });
    if (!next.groups.length) throw new Error('시트에 쓸 수 있는 그룹이 없어요');
    if (!next.phrases.length) next.phrases = DATA.phrases;
    // 장소: 시트의 places 탭이 없으면 기본 장소를 써요. 장소가 없는 문장은 첫 장소로 넣어요.
    var used = next.places.filter(function (x) { return next.phrases.some(function (q) { return q.place === x.id; }); });
    next.places = used.length ? used : DATA.places.slice();
    next.phrases.forEach(function (q) {
      if (!next.places.some(function (x) { return x.id === q.place; })) q.place = next.places[0].id;
    });
    if (!next.missions.length) next.missions = DATA.missions;
    return next;
  }
  function refreshAfterLoad() {
    if (['home', 'pairs', 'phrases', 'place', 'records', 'settings', 'mission'].indexOf(ui.view) >= 0) rerender();
  }
  async function loadSheet() {
    if (!CFG.SHEET_ID) return;
    try {
      var cached = localStorage.getItem(SHEET_CACHE_KEY);
      if (cached) { DATA = JSON.parse(cached); dataSource = '구글 시트 (저장된 사본)'; refreshAfterLoad(); }
    } catch (e) {}
    try {
      var res = await Promise.all(['groups', 'pairs', 'phrases', 'missions'].map(fetchSheet));
      var pl = await fetchSheet('places').catch(function () { return []; });
      DATA = buildData(res[0], res[1], res[2], res[3], pl);
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
  window.__app = { get S() { return S; }, ui: ui, ACT: ACT, go: go, today: today, get DATA() { return DATA; } };
})();
