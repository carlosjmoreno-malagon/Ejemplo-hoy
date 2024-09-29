const cerrarSesionButton = document.getElementById('cerrar-sesion');

cerrarSesionButton.addEventListener('click', async (e) => {
  e.preventDefault();
  localStorage.removeItem('users');
  window.location.href = 'index.html';
});