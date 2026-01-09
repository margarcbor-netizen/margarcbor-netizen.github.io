

const archivoBtn = document.getElementById('archivoBtn');
const archivoPanel = document.getElementById('archivoPanel');

archivoBtn.addEventListener('click', () => {
    archivoPanel.classList.toggle('open');
    
    /*vinculado a cambio de color boton al abrir panel
    archivoPanel.classList.toggle("is-open"); 
    document.body.classList.toggle("archivo-open");*/
});

archivoPanel.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    archivoPanel.classList.remove('open');
  });
})