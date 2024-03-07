
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
        rect.top >= -500 &&
        rect.left >= -500 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


/// Función para activar el efecto de fade-in cuando el usuario hace scroll
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

/*
// Función para restablecer la opacidad cuando el elemento ya no está visible
function resetOpacityOnScroll() {
  var elementsToCheck = document.querySelectorAll('.yoCard1, .yoCard2, .welcome, .inicio');

  elementsToCheck.forEach(function(element) {
      if (!isElementInViewport(element)) {
          element.classList.remove('loaded');
      }
  });
}
*/
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





/*Boton flotante*/ 

document.addEventListener("DOMContentLoaded", function() {
  const floatingButton = document.getElementById('git');

  // Variables para almacenar la posición inicial del botón flotante
  let initialX;
  let initialY;
  let currentX = 0;
  let currentY = 0;

  // Evento que se activa cuando se presiona el botón flotante
  floatingButton.addEventListener('touchstart', (e) => {
      // Obtener la posición inicial del toque
      initialX = e.touches[0].clientX - currentX;
      initialY = e.touches[0].clientY - currentY;
  });

  // Evento que se activa cuando se mueve el toque
  floatingButton.addEventListener('touchmove', (e) => {
      // Evitar el comportamiento predeterminado del desplazamiento de la página
      e.preventDefault();

      // Calcular la nueva posición del botón flotante
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;

      // Establecer la nueva posición del botón flotante
      floatingButton.style.left = currentX + 'px';
      floatingButton.style.top = currentY + 'px';
  });
});


// Función para verificar si un elemento está visible en la pantalla y agregar la clase ".x" si está visible
function ElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  var isVisible =
      rect.top >= -500 &&
      rect.left >= -500 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

  if (isVisible) {
      el.classList.add("animate__animated animate__wobble");
  } else {
      el.classList.remove("animate__animated animate__wobble");
  }

  return isVisible;
}

// Función para aplicar la animación al elemento .yoCard1
function animateYoCardOnScroll() {
  var yoCard1Elements = document.querySelectorAll('.yoCard1, .yoCard2');

  yoCard1Elements.forEach(function(element) {
      if (isElementInViewport(element) && element.classList.contains('loaded')) {
          element.classList.add('animate__animated', 'animate__backInDown');
      }
  });
}

// Agregar un event listener para detectar el scroll y activar la animación
window.addEventListener('scroll', function() {
  animateYoCardOnScroll();
});


// Función para aplicar la animación al elemento .yoCard1
function animatetitleSkillsOnScroll() {
  var yoCard1Elements = document.querySelectorAll('.titleSkills');

  yoCard1Elements.forEach(function(element) {
      if (isElementInViewport(element) && element.classList.contains('loaded')) {
          element.classList.add('animate__animated', 'animate__tada');
      }
  });
}

window.addEventListener('scroll', function() {
  animatetitleSkillsOnScroll() ;
});