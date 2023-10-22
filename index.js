
var splide = new Splide('.splide', {
  type: 'loop',
  perPage: 3,
  focus: 'center',
});

splide.mount();


function findRecipe() {

  let favDrink = prompt("Please select the recipe category: \n\n1 -    CUPCAKE \n2 -   BREAKFAST \n3 -   CAKE");
  var number = parseInt(favDrink)
  switch (number) {
    case 1:
      window.location.href = "cupcake.html";
      break;
    case 2:
      window.location.href = "breakfast.html";
      break;
    case 3:
      window.location.href = "cake.html";
      break;
    default:
      text = "I have never heard of that one..";
  }

}

function startTimerPrompt() {
  const timeOption = prompt("Choose an option:\n1 - Seconds\n2 - Minutes");

  if (timeOption === "1") {
    const userSeconds = prompt("Enter the number of seconds:");

    if (userSeconds !== null) {
      const totalSeconds = parseInt(userSeconds);

      if (!isNaN(totalSeconds) && totalSeconds > 0) {
        const intervals = 2;

        for (let i = 0; i < intervals; i++) {
          setTimeout(function () {
            alert(`Left: ${totalSeconds - i * (totalSeconds / intervals)} seconds`);
          }, i * (totalSeconds / intervals) * 1000);
        }

        setTimeout(function () {
          alert('Time is over!');
        }, totalSeconds * 1000);
      } else {
        alert('The entered number of seconds is invalid.');
      }
    }
  } else if (timeOption === "2") {
    const userMinutes = prompt("Enter the number of minutes:");

    if (userMinutes !== null) {
      const totalMinutes = parseInt(userMinutes);

      if (!isNaN(totalMinutes) && totalMinutes > 0) {
        const totalSeconds = totalMinutes * 60;
        const intervals = 2;

        for (let i = 0; i < intervals; i++) {
          setTimeout(function () {
            alert(`Left: ${totalSeconds - i * (totalSeconds / intervals)} seconds`);
          }, i * (totalSeconds / intervals) * 1000);
        }

        setTimeout(function () {
          alert('Time is over!');
        }, totalSeconds * 1000);
      } else {
        alert('The entered number of minutes is invalid.');
      }
    }
  } else {
    alert('Invalid option. Please choose 1 for seconds or 2 for minutes.');
  }
}


function validateForm(email, password) {
  if (email === "") {
    alert("Please enter your email.");
  } else if (password.length < 6) {
    alert("Your password should be at least 6 characters long.");
  } else {
    alert("Form submitted successfully.");
  }
}

function togglePasswordVisibility(passwordInput) {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";

  } else {
    passwordInput.type = "password";

  }
}


const messages = [
  "If you have questions, You can contact, all info given above",
  "Your lovely Laura and Alikhan",

];

function showMessages() {
  for (let i = 0; i < messages.length; i++) {
      if (i === 0) {
          const userInput = prompt("what did you want to ask??");
          alert(`We will consider your question: ${userInput}`);
      } else {
          alert(messages[i]);
      }
  }
}
function updateSuccessCounter() {
  document.getElementById("successCount").textContent = successCounter;
}










