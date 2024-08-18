// Existing code for login functionality
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

// So that when I  click sign Up button I am taken to signUp.html
let signupButton = document.querySelector('#signup-button');

signupButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent any default behavior (though in this case, it's mostly precautionary)
  window.location.href = 'views/signUp.html'; // Update this path to match your signup page location
});
