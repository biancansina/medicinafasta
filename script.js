
document.querySelectorAll('.materia').forEach(materia => {
  materia.addEventListener('click', () => {
    const infoBox = document.getElementById('info-box');
    infoBox.textContent = materia.dataset.info;
    infoBox.style.display = 'block';
  });
});
