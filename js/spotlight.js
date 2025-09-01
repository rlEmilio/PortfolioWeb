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

  // Actualiza la posición y escala en CSS
  function updateCSS(x, y, scale) {
    spot.style.left = x + "px";
    spot.style.top = y + "px";
    spot.style.transform = `translate(-50%,-50%) scale(${scale})`;
    root.style.setProperty("--x", x + "px");
    root.style.setProperty("--y", y + "px");
  }

  // Captura movimiento del ratón
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    document.body.classList.remove("no-cursor");
  }, { passive: true });

  // Oculta el foco si el cursor sale de la ventana
  window.addEventListener("mouseleave", () => {
    document.body.classList.add("no-cursor");
  });

  // Bucle de animación
  function raf() {
    // Interpolación suave (lerp)
    currentX += (mouseX - currentX) * ease;
    currentY += (mouseY - currentY) * ease;

    // Calcula velocidad aproximada
    vx = mouseX - currentX;
    vy = mouseY - currentY;
    const speed = Math.min(1, Math.hypot(vx, vy) / 120);

    // Escala según velocidad
    const scale = scaleMin + (scaleMax - scaleMin) * speed;

    updateCSS(currentX, currentY, scale);

    requestAnimationFrame(raf);
  }

  // Inicialización
  updateCSS(currentX, currentY, 1);
  requestAnimationFrame(raf);
})();
