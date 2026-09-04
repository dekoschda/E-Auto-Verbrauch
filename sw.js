const C='e-auto-v38-30-tage';
const APP_SHELL=['./','./index.html','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(cache=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(
  caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim())
));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request,{cache:'no-store'}).then(response=>{
    if(response&&response.ok&&new URL(e.request.url).origin===self.location.origin){const copy=response.clone();caches.open(C).then(cache=>cache.put(e.request,copy))}
    return response;
  }).catch(()=>caches.match(e.request).then(cached=>cached||caches.match('./index.html'))));
});
