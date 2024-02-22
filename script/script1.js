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

  document.getElementById("year").innerHTML = new Date().getFullYear();