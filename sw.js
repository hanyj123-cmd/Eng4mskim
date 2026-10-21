// 오프라인에서도 열리게 하는 파일이에요.
// 앱 파일을 고친 뒤에는 아래 버전 숫자를 올려 주세요 (예: v4 → v5). 그래야 기기에서 새 파일을 받아요.
var CACHE = 'eng-mom-v18';
var ASSETS = [
  './', 'index.html', 'style.css', 'app.js', 'data.js', 'config.js', 'manifest.json',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png',
  'fonts/overpass-latin-400-normal.woff2', 'fonts/overpass-latin-600-normal.woff2', 'fonts/overpass-latin-800-normal.woff2'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return c.addAll(ASSETS).then(function () {
        // 영어 소리 파일도 미리 저장해 둬요 (실패해도 설치는 계속)
        return fetch('audio/manifest.json').then(function (r) { return r.json(); }).then(function (m) {
          var urls = ['audio/manifest.json'];
          (m.items || []).forEach(function (k) { urls.push('audio/' + k + '.mp3', 'audio/' + k + '.slow.mp3'); });
          // 하나가 실패해도 나머지는 저장되게, 몇 개씩 나눠서 받아요
          var i = 0;
          function next() {
            var part = urls.slice(i, i + 20); i += 20;
            if (!part.length) return Promise.resolve();
            return Promise.all(part.map(function (u) { return c.add(u).catch(function () {}); })).then(next);
          }
          return next();
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
        if (hit) return rangeResponse(req, hit);
        // 처음 듣는 소리(다른 사람 목소리 등)는 파일 전체를 받아서 저장해 두고, 요청한 부분만 돌려줘요
        return fetch(req.url).then(function (res) {
          if (!res || res.status !== 200) return fetch(req);
          var copy = res.clone();
          return caches.open(CACHE).then(function (c) { return c.put(req.url, copy); })
            .catch(function () {}).then(function () { return rangeResponse(req, res); });
        }).catch(function () { return fetch(req); });
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
