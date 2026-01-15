
/*nota: he intentado hacer de todo...la versioon anterior era más estimulante y si tenía cosillas de java,
pero esta es mucho más sencialla. Me habría gustado meter algun slider pero me funci¡onan fatal (algo estaré haciendo mal) y también animaciones 
de fade un asociada al scroll. NO ME SALE NADFA, SOCORRO. Le pasa algo al index y no se que es, porque en los htmls de proyecto si funciona java. no se*/




/*A VER SI FUNCIONA, POR FAVOR. me está ayudando chat porque yo estas sofisticaciones no las controlo
vale, ya entiendo. no es que se anime al aparecer, sino que la animación lo coloca en su sitio cuando el elemento 
está en un 15% del view port, y esa recolocación es el efecto. SOLO funciona en los otros HTML, pero en index NO*/

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); /*cuando entra en pantalla visibile avisa de que ya puede animarse?*/
        /*unobserve solo anima una vez, no interesa*/
        } else {
        entry.target.classList.remove('visible'); /* quita la clase cuando el elemnto desaparece de pantalla, asique puede repetirse el efecto*/
      }
    });
  },
  {threshold: 0.15}
);

reveals.forEach(el => observer.observe(el));

window.addEventListener('load', () => { /*esto permite que el mismo efecto pueda aplicarse a los elementos que YA se ven al cargar la página*/
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) { /*elemento dentro del 85% = visible*/
      el.classList.add('visible');
    }
  });
});



/*zoom intento. no funciona*/
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

          overlay.addEventListener('click', (e) => { /*cierra con clic fuera de la imagen*/
            if(e.target === overlay) {
              overlay.style.display = 'none';
            }
          });

/*intento de efecto al cargar, nada SALE*/
        document.addEventListener("DOMContentLoaded", () => {
          // Selecciona cada imagen con efecto blur
          const imgs = document.querySelectorAll(".blur-on-load");

          imgs.forEach(img => {
            // Crea elemento nuevo de Image para cargar
            const temp = new Image();
            temp.src = img.dataset.src;

            temp.onload = () => {
              // Cuando la imagen se carga, ponla como src real
              img.src = temp.src;
              img.style.opacity = "1";
              img.style.filter = "blur(0)";
            };
          });
        });


/*carrousel en imagenes archivo, automático!!!*/
          document.addEventListener("DOMContentLoaded", () => {
            new bootstrap.Carousel(
              document.querySelector("#slidernodo"),
              {
                interval: 1000,
                ride: "carousel"
              }
            );
          });

          sel = document.querySelector("#slidernodo"); /*este avanza con clic*/
          const instance = bootstrap.Carousel.getInstance(carousel);

          carousel.querySelectorAll(".carousel-click").forEach(img => {
            img.addEventListener("click", () => {
              instance.next();
            });
          });

  /*mi cursor adaptado al movimiento del ratón. Funcionaba, pero no he logrado que el pointer desaparezca cuando hay que clicar
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  cursorX += (mouseX - cursorX) * 0.1;
  cursorY += (mouseY - cursorY) * 0.1;
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
  requestAnimationFrame(animate);
}
animate();*/














/*proyectos*/

            /*esto es un boton para subir, pero ñe*/
            const scrollBtn = document.getElementById("scrollBtn"); /*para subir arriba*/

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
            });







/*del antiguo index*/
        /*variables declaradas del antiguo documento*/
        const archivoBtn = document.getElementById('archivoBtn');
        const archivoPanel = document.getElementById('archivoPanel');
        const flowTrack = document.getElementById("flowTrack");
        const infoBar = document.querySelector("infoBar");
        const navbar = document.querySelector(".navbar");



        /* esto es del archivo desplegable del antiguo documento*/
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




        /*al desplegar panel ocultar flow y info= pasando*/
        if (archivoPanel.classList.contains("desplegar")) {
              infoBar.classList.add("ocultar");  /*oculta footer*/
              flow.classList.add("oculto");      /*oculta carusel*/
            } else {
              infoBar.classList.remove("ocultar"); /*muestra footer*/
              flow.classList.remove("oculto");     /*muestra carrusel*/
            }
            

        /*al desplegar panel ocultar carroulsel = funciona, pero el carrousel ensucia. quiza si
        home es de otra forma puedes usarlo u mola*/

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
        });