document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // animar solo una vez
        }
      });
    },
    { threshold: 0.2 } // se activa cuando 20% del elemento es visible
  );

  faders.forEach(fader => {
    fader.removeAttribute("hidden"); 
    observer.observe(fader);
  });
});
