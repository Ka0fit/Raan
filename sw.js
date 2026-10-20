// ไม่เก็บแคช ดึงจากเว็บทุกครั้ง แอปจะได้เป็นเวอร์ชันล่าสุดเสมอ
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request))});
