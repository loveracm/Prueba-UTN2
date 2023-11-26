window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var contenido = document.getElementById('contenido');
    var scrollPosition = window.scrollY;

    if (scrollPosition > contenido.offsetTop) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const oscuro = document.getElementById('oscuro');
    const body = document.body;
  
    oscuro.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
    });
  });

  window.addEventListener('load', function () {
    alert('¡Bienvenidos a mi Página Web!');
  });