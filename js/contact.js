emailjs.init("eDIKHJV88PDUJ_n9x");

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs
    .sendForm("service_qfrixz6", "template_84gfvu8", form)
    .then(() => {
      alert("Mensaje enviado correctamente.");
      form.reset();
    })
    .catch((error) => {
      console.error("Error al enviar:", error);
      alert("No se pudo enviar el mensaje.");
    });
});