//*animacion para las imagenes
document.addEventListener("DOMContentLoaded", function () {
  const imgSlider = document.querySelector(".img-slider");
  const images = imgSlider.querySelectorAll("img");
  let currentImageIndex = 0;

  function showNextImage() {
    images[currentImageIndex].classList.remove("active");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add("active");
  }

  // Mostrar la primera imagen al cargar la página
  images[currentImageIndex].classList.add("active");

  // Cambiar de imagen cada 3 segundos (ajusta este valor según tu preferencia)
  setInterval(showNextImage, 4000);
});

/** */
document.addEventListener("DOMContentLoaded", function () {
  // Obtenemos todos los elementos <a> dentro de la lista <ul>
  const links = document.querySelectorAll(".navegador ul li a");

  // Iteramos sobre cada enlace
  links.forEach(function (link) {
    // Comparamos la URL actual con la URL del enlace
    if (window.location.href === link.href) {
      // Si son iguales, agregamos la clase "active" al enlace
      link.classList.add("active");
    }
  });
});

//* dropdown menu 
function toggleMenu() {
  // Selecciona el elemento que representa la flecha y el menú desplegable
  let flecha = document.querySelector('.flecham');
  let menuDropdown = document.querySelector('.menu-dropdown');

  if (menuDropdown.classList.contains('visible')) {
      // Si el menú está visible, lo oculta
      menuDropdown.classList.remove('visible'); // Quita la clase 'visible' para ocultar el menú
      flecha.style.left = '45%'; // Restaura la posición de la flecha
      flecha.style.transform = 'none'; // Restaura la rotación de la flecha
      menuDropdown.style.transform = 'translateX(-197px)'; // Oculta el menú moviéndolo hacia la izquierda

      // Espera 500 milisegundos antes de cambiar la opacidad del menú para permitir que la transformación termine
      setTimeout(function() {
          menuDropdown.style.opacity = '0'; // Establece la opacidad del menú a 0 para ocultarlo completamente
      }, 690);
  } else {
      // Si el menú está oculto, lo muestra
      menuDropdown.classList.add('visible'); // Agrega la clase 'visible' para mostrar el menú
      flecha.style.left = '55%'; // Mueve la flecha a una posición indicando que el menú está abierto
      flecha.style.transform = 'rotate(180deg)'; // Rota la flecha indicando que el menú está abierto
      menuDropdown.style.transform = 'translateX(-10px)'; // Muestra el menú moviéndolo hacia la derecha
      menuDropdown.style.opacity = '1'; // Muestra el menú con opacidad 1 directamente
  }
}

