
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
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const birthdate = document.getElementById('birthdate').value;

  const userAccounts = JSON.parse(localStorage.getItem('userAccounts')) || [];
  userAccounts.push({ email, password, name, surname, birthdate });

  localStorage.setItem('userAccounts', JSON.stringify(userAccounts));

  alert('Registration successful!');
});

function validateForm() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('pwd').value;

  const userAccounts = JSON.parse(localStorage.getItem('userAccounts')) || [];

  const isUserFound = userAccounts.some(account => account.email === email && account.password === password);

  if (isUserFound) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
   

    // Set other user details

    localStorage.setItem("userName", userAccounts.find(account => account.email === email).name);
    localStorage.setItem("userSurname", userAccounts.find(account => account.email === email).surname);
    localStorage.setItem("userBirthdate", userAccounts.find(account => account.email === email).birthdate);
    localStorage.setItem("userPassword", userAccounts.find(account => account.email === email).password);

    window.location.href = 'user.html';
  } else if (email === 'hello@gmail.com' && password === '123455') {
    window.location.href = 'admin.html';
  } else {
    alert('Incorrect email address or password. Try once more.');
  }
}

var isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn === "true") {
  var userName = localStorage.getItem("userName");
  var userSurname = localStorage.getItem("userSurname");
  var userBirthdate = localStorage.getItem("userBirthdate");

  // Display user details 
  document.getElementById("userName").textContent = userName || "User's Name";
  document.getElementById("userSurname").textContent = userSurname || "User's Surname";
  document.getElementById("userBirthdate").textContent = userBirthdate || "User's bday";
  window.location.href = 'user.html';
}

document.addEventListener("DOMContentLoaded", function () {

displayPurchaseData();
});
