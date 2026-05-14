window.onload = function() {

  const scrollTopBtn = document.querySelector('.scroll-top');
  const projectsPage = document.querySelector('.projects-page');
  const topPage = document.querySelector('top');

  // Click en la flecha para subir al top
  scrollTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#top').scrollIntoView({ behavior: 'smooth' });
  });

  // Click en el botón de proyectos
  document.querySelector('.projects').addEventListener('click', function(e) {
    e.preventDefault();
    projectsPage.scrollIntoView({ behavior: 'smooth' });
  });


    // Click en el botón de top
  document.querySelector('#top').addEventListener('click', function(e) {
    e.preventDefault();
    topPage.scrollIntoView({ behavior: 'smooth' });
  });


  // Mostrar/ocultar la flecha con fade según scroll
  window.addEventListener('scroll', () => {
    const limite = projectsPage.offsetTop;

    if (window.scrollY > limite) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

}
