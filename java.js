window.addEventListener('load', function () {
    console.log('Creador Carlos Lovera');
  });

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
    alert('¡Bienvenidos Creador Carlos Lovera!');
  });

  window.addEventListener('load', function () {
    const enlaces = document.querySelectorAll('a');
    console.log(`Número de enlaces: ${enlaces.length}`);
  });
  
  window.addEventListener('load', function () {
    const imagenes = document.querySelectorAll('img');
    console.log(`Número de imágenes: ${imagenes.length}`);
  });
