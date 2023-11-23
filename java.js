document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.getElementById('toggleButton');
  var listaDesplegable = document.getElementById('listaDesplegable');

  toggleButton.addEventListener('click', function() {
      if (listaDesplegable.style.display === 'none') {
          listaDesplegable.style.display = 'block';
          toggleButton.textContent = 'Categorias -';
      } else {
          listaDesplegable.style.display = 'none';
          toggleButton.textContent = 'Categorias +';
      }
  });
});
