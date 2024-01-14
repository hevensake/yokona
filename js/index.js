function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'User123' && password === 'Password456') {
    document.getElementById('loginStatus').innerText = 'Log In Succesful';
    redirectToHomepage() 
  }
  else {
    document.getElementById('loginStatus').innerText = 'Invalid Username or Password';
  }
}

function signup() {
  const newEmail = document.getElementById('newEmail').value;
  const newPassword = document.getElementById('newPassword').value;

  users[newEmail] = newPassword;

  document.getElementById('loginStatus').innerText = 'Signed up as ${newUsername}';
}

function redirectToHomepage() {
  window.location.href = 'home.html';
}

function toggleSignup() {
  const signupForm = document.getElementById('signupForm');
  signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
}