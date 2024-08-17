//Below I'm writing my Dom manipulation
let loginButton = document.querySelector('#login-button');
let usernameInput = document.querySelector('#username');
let passwordInput = document.querySelector('#password');

function verifyLogin(username, password) {
  const validUsernames = ['admin1', 'admin2', 'admin3'];
  const validPassword = 'see';
  return validUsernames.includes(username) && password === validPassword;
}

loginButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  let username = usernameInput.value.trim();
  let password = passwordInput.value.trim();

  if (verifyLogin(username, password)) {
    window.location.href = "admin.html";
  } else {
    alert('Invalid login credentials');
  }
});

