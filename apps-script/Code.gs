/**
 * 영어 한 걸음 — 진도 기록용 Apps Script (선택 사항)
 *
 * 쓰는 법: 구글 시트에서 [확장 프로그램] > [Apps Script]를 열고 이 코드를 통째로 붙여 넣은 뒤
 * [배포] > [새 배포] > 유형 "웹 앱" > 실행 사용자 "나" > 액세스 권한 "모든 사용자" 로 배포하세요.
 * 나오는 웹 앱 URL을 config.js 의 APPS_SCRIPT_URL 에 넣으면 돼요.
 */
function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('progress');
  if (!sheet) {
    sheet = ss.insertSheet('progress');
    sheet.appendRow(['time', 'user', 'type', 'detail', 'xp', 'streak']);
  }
  try {
    var d = JSON.parse(e.postData.contents);
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

function doGet() {
  return ContentService.createTextOutput('영어 한 걸음 기록용 웹 앱이 켜져 있어요.');
}
