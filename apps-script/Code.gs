/**
 * 영어 한 걸음 — 계정(구글 로그인)·진도 저장·진도 기록용 Apps Script (선택 사항)
 *
 * 하는 일
 *  1) 구글 로그인으로 계정 만들기/로그인 (처음 로그인하면 계정이 자동으로 만들어져요)
 *  2) 계정별 진도를 시트('accounts' 탭)에 저장해서 아이폰·아이패드가 같은 진도를 써요
 *  3) (예전 기능) 학습 기록을 'progress' 탭에 한 줄씩 남겨요
 *
 * 쓰는 법은 README 의 "구글 로그인 켜기" 를 보세요. 요약:
 *  - 구글 시트에서 [확장 프로그램] > [Apps Script]에 이 코드를 통째로 붙여 넣어요.
 *  - [프로젝트 설정] > [스크립트 속성]에 GOOGLE_CLIENT_ID 를 추가해요 (구글 클라우드에서 만든 웹 클라이언트 ID).
 *  - (선택) ALLOWED_EMAILS 를 추가하면 그 이메일만 계정을 만들 수 있어요. 쉼표로 구분: a@gmail.com,b@gmail.com
 *  - [배포] > [새 배포] > 유형 "웹 앱" > 실행 사용자 "나" > 액세스 권한 "모든 사용자".
 *    코드를 고친 뒤에는 [배포 관리]에서 새 버전으로 다시 배포해야 반영돼요.
 *  - 나오는 웹 앱 URL을 config.js 의 APPS_SCRIPT_URL 에 넣어요.
 */
var SESSION_DAYS = 180;      // 한 번 로그인하면 이 기기에서 유지되는 기간
var CHUNK = 40000;           // 시트 한 칸에 넣을 수 있는 글자 수(50,000자 제한)보다 작게 나눠서 저장
var MAX_CHUNKS = 8;          // 계정당 최대 약 32만 자
var ACC_HEAD = ['sub', 'email', 'name', 'created', 'lastSeen', 'size'];

function doPost(e) {
  var d;
  try {
    d = JSON.parse(e.postData.contents);
  } catch (err) {
    return out_({ ok: false, error: 'bad_request' });
  }
  if (d && d.action) return out_(handleAccount_(d));
  return logProgress_(d);
}

function doGet() {
  return ContentService.createTextOutput('영어 한 걸음 서버가 켜져 있어요.');
}

function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/* ---------- 예전 기능: 진도 기록 ---------- */
function logProgress_(d) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('progress');
  if (!sheet) {
    sheet = ss.insertSheet('progress');
    sheet.appendRow(['time', 'user', 'type', 'detail', 'xp', 'streak']);
  }
  try {
    sheet.appendRow([
      d.ts || new Date().toISOString(),
      d.user || '',
      d.type || '',
      JSON.stringify(d.detail || {}),
      d.xp || 0,
      d.streak || 0
    ]);
  } catch (err) {
    sheet.appendRow([new Date().toISOString(), 'error', String(err), '', '', '']);
  }
  return ContentService.createTextOutput('ok');
}

/* ---------- 계정 ---------- */
function handleAccount_(d) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch (err) {
    return { ok: false, error: 'busy' };
  }
  try {
    if (d.action === 'login') return login_(d);
    var acc = sessionAccount_(d.session);
    if (!acc) return { ok: false, error: 'bad_session' };
    if (d.action === 'sync') return { ok: true, state: readState_(acc), user: publicUser_(acc) };
    if (d.action === 'save') return saveState_(acc, d.state);
    if (d.action === 'logout') { deleteSession_(d.session); return { ok: true }; }
    if (d.action === 'delete_account') return deleteAccount_(acc);
    return { ok: false, error: 'unknown_action' };
  } catch (err) {
    return { ok: false, error: String(err && err.message ? err.message : err) };
  } finally {
    lock.releaseLock();
  }
}

function login_(d) {
  var p = verifyIdToken_(d.idToken);
  var allowed = PropertiesService.getScriptProperties().getProperty('ALLOWED_EMAILS');
  if (allowed) {
    var list = allowed.split(',').map(function (x) { return x.trim().toLowerCase(); }).filter(String);
    if (list.indexOf(String(p.email).toLowerCase()) < 0) return { ok: false, error: 'not_allowed' };
  }
  var sh = sheet_('accounts', ACC_HEAD.concat(chunkHeads_()));
  var key = 'g_' + p.sub;   // 시트가 긴 숫자를 반올림하지 않도록 글자를 붙여요
  var row = findRow_(sh, 0, key);
  var created = false;
  var now = new Date().toISOString();
  if (!row) {
    sh.appendRow([key, safe_(p.email), safe_(p.name || ''), now, now, 0]);
    row = sh.getLastRow();
    created = true;
  } else {
    sh.getRange(row, 2, 1, 4).setValues([[safe_(p.email), safe_(p.name || ''), sh.getRange(row, 4).getValue() || now, now]]);
  }
  purgeSessions_();
  var token = Utilities.getUuid() + Utilities.getUuid();
  var ss = sheet_('sessions', ['hash', 'sub', 'created', 'expires']);
  var exp = new Date(Date.now() + SESSION_DAYS * 86400000).toISOString();
  ss.appendRow([hash_(token), key, now, exp]);
  var acc = { sheet: sh, row: row, sub: key, email: p.email, name: p.name || '' };
  return {
    ok: true, created: created, session: token,
    user: { sub: p.sub, email: p.email, name: p.name || '', picture: p.picture || '' },
    state: readState_(acc)
  };
}

function verifyIdToken_(token) {
  if (!token) throw new Error('no_token');
  var cid = PropertiesService.getScriptProperties().getProperty('GOOGLE_CLIENT_ID');
  if (!cid) throw new Error('server_not_configured');
  var res = UrlFetchApp.fetch('https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(token), { muteHttpExceptions: true });
  if (res.getResponseCode() !== 200) throw new Error('invalid_token');
  var p = JSON.parse(res.getContentText());
  if (p.aud !== cid) throw new Error('wrong_audience');
  if (p.iss !== 'accounts.google.com' && p.iss !== 'https://accounts.google.com') throw new Error('bad_issuer');
  if (Number(p.exp) * 1000 < Date.now()) throw new Error('expired');
  if (String(p.email_verified) !== 'true') throw new Error('email_not_verified');
  if (!p.sub || !p.email) throw new Error('invalid_token');
  return p;
}

function sessionAccount_(token) {
  if (!token) return null;
  var ss = sheet_('sessions', ['hash', 'sub', 'created', 'expires']);
  var row = findRow_(ss, 0, hash_(token));
  if (!row) return null;
  var v = ss.getRange(row, 1, 1, 4).getValues()[0];
  if (new Date(v[3]).getTime() < Date.now()) { ss.deleteRow(row); return null; }
  var sh = sheet_('accounts', ACC_HEAD.concat(chunkHeads_()));
  var arow = findRow_(sh, 0, v[1]);
  if (!arow) return null;
  var a = sh.getRange(arow, 1, 1, 3).getValues()[0];
  return { sheet: sh, row: arow, sub: a[0], email: a[1], name: a[2] };
}

function publicUser_(acc) {
  return { sub: String(acc.sub).replace(/^g_/, ''), email: acc.email, name: acc.name };
}

function readState_(acc) {
  var vals = acc.sheet.getRange(acc.row, ACC_HEAD.length + 1, 1, MAX_CHUNKS).getValues()[0];
  var s = vals.map(function (v) { return v ? String(v).slice(1) : ''; }).join('');
  if (!s) return null;
  try { return JSON.parse(s); } catch (err) { return null; }
}

function saveState_(acc, stateStr) {
  var s = typeof stateStr === 'string' ? stateStr : JSON.stringify(stateStr || {});
  if (s.length > CHUNK * MAX_CHUNKS) return { ok: false, error: 'too_big' };
  try { JSON.parse(s); } catch (err) { return { ok: false, error: 'bad_state' }; }
  var cells = [];
  for (var i = 0; i < MAX_CHUNKS; i++) { var piece = s.substr(i * CHUNK, CHUNK); cells.push(piece ? '~' + piece : ''); }
  acc.sheet.getRange(acc.row, ACC_HEAD.length + 1, 1, MAX_CHUNKS).setValues([cells]);
  acc.sheet.getRange(acc.row, 5, 1, 2).setValues([[new Date().toISOString(), s.length]]);
  return { ok: true, size: s.length };
}

function deleteAccount_(acc) {
  var ss = sheet_('sessions', ['hash', 'sub', 'created', 'expires']);
  var vals = ss.getDataRange().getValues();
  for (var i = vals.length - 1; i >= 1; i--) if (vals[i][1] === acc.sub) ss.deleteRow(i + 1);
  acc.sheet.deleteRow(acc.row);
  return { ok: true };
}

function deleteSession_(token) {
  var ss = sheet_('sessions', ['hash', 'sub', 'created', 'expires']);
  var row = findRow_(ss, 0, hash_(token));
  if (row) ss.deleteRow(row);
}

function purgeSessions_() {
  var ss = sheet_('sessions', ['hash', 'sub', 'created', 'expires']);
  var vals = ss.getDataRange().getValues();
  var now = Date.now();
  for (var i = vals.length - 1; i >= 1; i--) if (new Date(vals[i][3]).getTime() < now) ss.deleteRow(i + 1);
}

/* ---------- 도구 ---------- */
// 시트 수식으로 읽히지 않게 (=, +, -, @ 로 시작하는 글자 앞에 ' 를 붙여요)
function safe_(x) {
  return String(x).replace(/^[=+\-@]/, "'$&");
}

function chunkHeads_() {
  var a = [];
  for (var i = 1; i <= MAX_CHUNKS; i++) a.push('state' + i);
  return a;
}

function sheet_(name, head) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(head);
  }
  return sh;
}

function findRow_(sh, col, value) {
  var last = sh.getLastRow();
  if (last < 2) return 0;
  var vals = sh.getRange(2, col + 1, last - 1, 1).getValues();
  for (var i = 0; i < vals.length; i++) if (String(vals[i][0]) === String(value)) return i + 2;
  return 0;
}

function hash_(t) {
  var bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, t);
  return bytes.map(function (b) { return ('0' + (b & 0xff).toString(16)).slice(-2); }).join('');
}
