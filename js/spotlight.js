(function () {
  const spot = document.querySelector(".spot");
  const root = document.documentElement;

  let mouseX = window.innerWidth / 2,
      mouseY = window.innerHeight / 2;
  let currentX = mouseX,
      currentY = mouseY;
  let vx = 0, vy = 0;

  const ease = 0.16;       // suavizado
  const scaleMin = 0.9;    // escala mínima
  const scaleMax = 1.35;   // escala máxima según velocidad

  function updateCSS(x, y, scale) {
    spot.style.left = x + "px";
    spot.style.top = y + "px";
    spot.style.transform = `translate(-50%,-50%) scale(${scale})`;
    root.style.setProperty("--x", x + "px");
    root.style.setProperty("--y", y + "px");
  }

  // Movimiento ratón
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    document.body.classList.remove("no-cursor");
    spot.style.opacity = "1";
  }, { passive: true });

  window.addEventListener("mouseleave", () => {
    document.body.classList.add("no-cursor");
  });

  // Movimiento táctil para móviles
  window.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    mouseX = touch.clientX;
    mouseY = touch.clientY;
    spot.style.opacity = "1";
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    mouseX = touch.clientX;
    mouseY = touch.clientY;
  }, { passive: true });

  window.addEventListener("touchend", () => {
    spot.style.opacity = "0";
  });

  // Animación
  function raf() {
    currentX += (mouseX - currentX) * ease;
    currentY += (mouseY - currentY) * ease;

    vx = mouseX - currentX;
    vy = mouseY - currentY;
    const speed = Math.min(1, Math.hypot(vx, vy) / 120);
    const scale = scaleMin + (scaleMax - scaleMin) * speed;

    updateCSS(currentX, currentY, scale);

    requestAnimationFrame(raf);
  }

  updateCSS(currentX, currentY, 1);
  requestAnimationFrame(raf);
})();
