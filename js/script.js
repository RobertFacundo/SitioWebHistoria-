
// Control del slide con las flechas del teclado
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') { // Si se presiona la flecha izquierda
    plusSlides(-1); // Retroceder en las diapositivas
  } else if (event.key === 'ArrowRight') { // Si se presiona la flecha derecha
    plusSlides(1); // Avanzar en las diapositivas
  }
});

let slideIndex = 1; // Variable para rastrear qué diapositiva se está mostrando actualmente
showSlides(slideIndex); // Mostrar la primera diapositiva al cargar la página

function plusSlides(n) { // Función para avanzar o retroceder en las diapositivas
  showSlides(slideIndex += n); // Llamar a la función showSlides con el nuevo índice de diapositiva
}

function currentSlide(n) { // Función para mostrar una diapositiva específica
  showSlides(slideIndex = n); // Llamar a la función showSlides con el índice de diapositiva especificado
}

function showSlides(n) { // Función para mostrar la diapositiva correspondiente
    let i;
    let slides = document.getElementsByClassName("mySlides"); // Obtener todas las diapositivas
    
    if (n > slides.length) { // Verificar si el índice de la diapositiva es mayor que la cantidad de diapositivas
      slideIndex = 1; // Establecer el índice de la diapositiva en 1 para mostrar la primera diapositiva
    }    
    if (n < 1) { // Verificar si el índice de la diapositiva es menor que 1
      slideIndex = slides.length; // Establecer el índice de la diapositiva en la cantidad total de diapositivas para mostrar la última diapositiva
    }
    
    for (i = 0; i < slides.length; i++) { // Ocultar todas las diapositivas
      slides[i].style.display = "none";  
    }
    
    slides[slideIndex-1].style.display = "block"; // Mostrar la diapositiva correspondiente
}


