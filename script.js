

const archivoBtn = document.getElementById('archivoBtn');
const archivoPanel = document.getElementById('archivoPanel');
const flowTrack = document.getElementById("flowTrack");

archivoBtn.addEventListener('click', () => {
    archivoPanel.classList.toggle('desplegar');
    
});

archivoPanel.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    archivoPanel.classList.remove('desplegar');
  });
})



/*al desplegar panel ocultar carroulsel = funciona, pero el carrousel ensucia. quiza si
home es de otra forma puedes usarlo u mola

archivoBtn.addEventListener('click', () => {
    archivoPanel.classList.toggle('desplegar');

      flowTrack.classList.toggle(
      "oculto",
      archivoPanel.classList.contains("desplegar")
  );
    
});

boton.addEventListener("click", () => {
  panel.classList.toggle("desplegar");

  if (panel.classList.contains("desplegar")) {
    carrusel.classList.add("ocultar");
  } else {
    carrusel.classList.remove("ocultar");
  }
});*/

