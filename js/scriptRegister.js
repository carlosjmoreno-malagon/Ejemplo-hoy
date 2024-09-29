const registerButton = document.getElementById('registro');
const usernameRegister = document.getElementById('user');
const passwordRegister = document.getElementById('password');
const confirmPasswordRegister = document.getElementById('correct_password');

let users = [];

registerButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const username = usernameRegister.value;
  const password = passwordRegister.value;
  const confirmPassword = confirmPasswordRegister.value;

  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  const user = { username, password };

  users.push(user);

  localStorage.setItem('users', JSON.stringify(users));

  alert('Registro exitoso');
  window.location.href = 'index.html';
});


