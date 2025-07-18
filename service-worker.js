self.addEventListener("install", (e) => {
  console.log("Service Worker instalado");
});

self.addEventListener("fetch", (e) => {
  // Solo para poder instalar como PWA
});
