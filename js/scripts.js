
const loginForm = document.querySelector('.container');
const entrarButton = document.querySelector('.Boton');
const usernameInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

console.log("El script se está ejecutando correctamente");
console.log(entrarButton);
window.addEventListener('load', function() {
  entrarButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  const users = JSON.parse(localStorage.getItem('users'));
  // Validar credenciales
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    alert('Ingreso exitoso');
    window.location.href = 'home.html';
  } else {
    alert('Credenciales incorrectas');
  }
});
})