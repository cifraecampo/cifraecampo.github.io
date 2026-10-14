// O Blessed mudou para https://blessedapp.github.io/
// Este arquivo substitui o app antigo guardado nos aparelhos: apaga o que estava salvo, se desliga e leva para o endereço novo.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    const ks = await caches.keys();
    await Promise.all(ks.map(k => caches.delete(k)));
    await self.registration.unregister();
    const cs = await self.clients.matchAll({type: "window"});
    cs.forEach(c => c.navigate("https://blessedapp.github.io/"));
  })());
});
