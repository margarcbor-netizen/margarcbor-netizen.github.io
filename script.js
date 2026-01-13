

const archivoBtn = document.getElementById('archivoBtn');
const archivoPanel = document.getElementById('archivoPanel');
const flowTrack = document.getElementById("flowTrack");
const infoBar = document.querySelector("infoBar");
const navbar = document.querySelector(".navbar");

archivoBtn.addEventListener('click', () => {
    archivoPanel.classList.toggle('desplegar');
    document.body.classList.toggle("archivo-desplegado"); /* cambia color a blanco para contraste*/
    navbar.classList.toggle("arriba");  /* translada navbar arriba cuando estas en archivo!!*/
});

archivoPanel.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    archivoPanel.classList.remove('desplegar');
  });
})





/*zoom*/
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');
const close = document.getElementById('close');
const body = document.body;

document.querySelectorAll('.zoom-img').forEach(img => {
  img.addEventListener('click', () => {
    overlay.style.display = 'flex';
    overlayImg.src = img.src;
  });
});

close.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// también cerrar al hacer clic fuera de la imagen
overlay.addEventListener('click', (e) => {
  if(e.target === overlay) {
    overlay.style.display = 'none';
  }
});

/*al desplegar panel ocultar flow y info= pasando

if (archivoPanel.classList.contains("desplegar")) {
      infoBar.classList.add("ocultar");  // se oculta infoBar
      flow.classList.add("oculto");      // se oculta carrusel
    } else {
      infoBar.classList.remove("ocultar"); // reaparece infoBar
      flow.classList.remove("oculto");     // reaparece carrusel
    }
    

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


/*proyectos*/











/*const scrollBtn = document.getElementById("scrollBtn"); /*para subir arriba

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});*/



