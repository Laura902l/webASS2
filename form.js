function togglePasswordVisibility(passwordInput) {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}


document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('pwd').value;

  const userAccounts = JSON.parse(localStorage.getItem('userAccounts')) || [];
  userAccounts.push({ email, password });

  localStorage.setItem('userAccounts', JSON.stringify(userAccounts));

  alert('Registration successful!');
});


//   function validateForm() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('pwd').value;

//     if (email === 'hello@gmail.com' && password === '123455') {
//         document.getElementById('loginForm').submit(); // Отправляем форму на admin.html
//     } else {
//         alert('Неправильный email или пароль. Попробуйте еще раз.');
//     }
// }
function validateForm() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('pwd').value;

  const userAccounts = JSON.parse(localStorage.getItem('userAccounts')) || [];
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userEmail = urlParams.get('email');
  const userPassword = urlParams.get('password');

  const isUserFound = userAccounts.some(account => account.email === email && account.password === password);

  if (isUserFound) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    window.location.href = 'user.html';
    // window.location.href = 'user.html?email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password);
  }
  else if (email === 'hello@gmail.com' && password === '123455') {
    window.location.href = 'admin.html';
  } else {
    alert('Incorrect email address or password. Try once more.');
  }
}





