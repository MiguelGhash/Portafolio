function toggleSkills(numero) {
    const desplegable = document.getElementById("skills" + numero);
    if (desplegable.style.maxHeight === "0px" || !desplegable.style.maxHeight) {
      // Expandir el div desplegable
      desplegable.style.maxHeight = desplegable.scrollHeight + "px";
    } else {
      // Contraer el div desplegable
      desplegable.style.maxHeight = "0";
    }
  }



document.addEventListener("DOMContentLoaded", function() {
    // Zona 1: Agregar clase "loaded" después de un breve retraso
    setTimeout(function() {
        document.querySelector("menu").classList.add("loaded");
    }, 10);

    // Zona 2: Agregar clase "loaded" después de un breve retraso adicional
    var welcome_elements = document.querySelectorAll(".welcome img, .welcome h2, .welcome h3");
    welcome_elements.forEach(function(element, index) {
        setTimeout(function() {
            element.style.opacity = "1";
        }, index * 500); // Añade la clase "loaded" a cada elemento con un retraso de 1000ms multiplicado por su índice
    });

    // Zona 3: Agregar clase "loaded" después de otro breve retraso adicional
    setTimeout(function() {
        document.querySelector(".inicio").classList.add("loaded");
    }, 1000);
});

// Función para verificar si un elemento está visible en la pantalla
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= -1000 &&
        rect.left >= -1000 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para activar el efecto de fade-in cuando el usuario hace scroll
function fadeInOnScroll() {
    var elementsToFadeIn = document.querySelectorAll('.yoCard1, .yoCard2, .welcome, .inicio, .titleSkills, .SkillCards');
  
    elementsToFadeIn.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('loaded');
        }
    });
}



// Agregar un event listener para detectar el scroll
window.addEventListener('scroll', function() {
    fadeInOnScroll();
});

// Función para restablecer la opacidad cuando el elemento ya no está visible
function resetOpacityOnScroll() {
  var elementsToCheck = document.querySelectorAll('.yoCard1, .yoCard2, .welcome, .inicio');

  elementsToCheck.forEach(function(element) {
      if (!isElementInViewport(element)) {
          element.classList.remove('loaded');
      }
  });
}

// Agregar un event listener para detectar el scroll
window.addEventListener('scroll', function() {
  resetOpacityOnScroll();
});



// Obtener el botón por su ID
var botonWeb = document.getElementById("web-btn");

// Agregar un event listener para escuchar el evento de clic
botonWeb.addEventListener("click", function() {
  alert("Al presionar este botón se  mostrarán mis creaciones web. ¡Aún trabajo en esta parte!  ");
});
var botonMus = document.getElementById("music-btn");

// Agregar un event listener para escuchar el evento de clic
botonMus.addEventListener("click", function() {
  alert("Al presionar este botón se  mostrará una muestra de mis proyectos musicales. ¡Aún trabajo en esta parte!  ");
});
