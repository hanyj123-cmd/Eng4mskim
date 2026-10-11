// 오프라인에서도 열리게 하는 파일이에요.
// 앱 파일을 고친 뒤에는 아래 버전 숫자를 올려 주세요 (예: v3 → v4). 그래야 기기에서 새 파일을 받아요.
var CACHE = 'eng-mom-v3';
var ASSETS = [
  './', 'index.html', 'style.css', 'app.js', 'data.js', 'config.js', 'manifest.json',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return c.addAll(ASSETS).then(function () {
        // 영어 소리 파일도 미리 저장해 둬요 (실패해도 설치는 계속)
        return fetch('audio/manifest.json').then(function (r) { return r.json(); }).then(function (m) {
          var urls = ['audio/manifest.json'];
          (m.items || []).forEach(function (k) { urls.push('audio/' + k + '.mp3', 'audio/' + k + '.slow.mp3'); });
          return c.addAll(urls);
        }).catch(function () {});
      });
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

// 사파리(아이폰)는 소리 파일을 "일부분만 달라"(Range)고 요청해요. 저장된 파일에서 그 부분만 잘라서 답해 줘야 해요.
function rangeResponse(req, hit) {
  return hit.arrayBuffer().then(function (buf) {
    var m = /bytes=(\d*)-(\d*)/.exec(req.headers.get('range') || '');
    var size = buf.byteLength, start = 0, end = size - 1;
    if (m) {
      if (m[1] === '' && m[2] !== '') start = Math.max(0, size - parseInt(m[2], 10));
      else {
        start = parseInt(m[1] || '0', 10);
        if (m[2] !== '') end = Math.min(size - 1, parseInt(m[2], 10));
      }
    }
    if (start >= size || start > end) {
      return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + size } });
    }
    return new Response(buf.slice(start, end + 1), {
      status: 206, statusText: 'Partial Content',
      headers: {
        'Content-Type': hit.headers.get('Content-Type') || 'audio/mpeg',
        'Content-Range': 'bytes ' + start + '-' + end + '/' + size,
        'Content-Length': String(end - start + 1)
      }
    });
  });
}

// 같은 사이트 파일: 저장된 걸 먼저 보여 주고, 뒤에서 새 버전을 받아 둬요.
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  if (req.headers.has('range')) {
    e.respondWith(
      caches.match(req.url).then(function (hit) {
        return hit ? rangeResponse(req, hit) : fetch(req);
      })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function (hit) {
      var net = fetch(req).then(function (res) {
        if (res && res.status === 200) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () { return hit; });
      return hit || net;
    })
  );
});
