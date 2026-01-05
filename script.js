

const archivoBtn = document.getElementById('archivoBtn');
const archivoPanel = document.getElementById('archivoPanel');

archivoBtn.addEventListener('click', () => {
    archivoPanel.classList.toggle('open');
});

archivoPanel.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    archivoPanel.classList.remove('open');
  });
});
