
var splide = new Splide('.splide', {
  type: 'loop',
  perPage: 3,
  focus: 'center',
});

splide.mount();


//like
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".like-button1");

  // Function to update the like buttons based on the user's login status
  function updateLikeButtons() {
    let userEmail = localStorage.getItem("userEmail");

    buttons.forEach((button) => {
      let userLikeKey = userEmail + "-" + button.id;
      let isLiked = localStorage.getItem(userLikeKey) === "true";

      if (isLiked) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  // Event listener for like buttons
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      var isLoggedIn = localStorage.getItem("isLoggedIn");
      var userEmail = localStorage.getItem("userEmail");

      if (isLoggedIn === "true" && userEmail) {
        let userLikeKey = userEmail + "-" + button.id;
        let hasLiked = localStorage.getItem(userLikeKey) === "true";

        if (!hasLiked) {
          this.classList.toggle("active");
          this.classList.add("animated");
          generateClones(this);
          localStorage.setItem(userLikeKey, this.classList.contains("active"));
        } else {
          this.classList.remove("active");
          localStorage.removeItem(userLikeKey);
        }
      } else {
        alert("Please log in or sign up.");
      }
    });
  });

  // Initial update of like buttons when the page loads
  updateLikeButtons();

  function generateClones(button) {
    let clones = randomInt(2, 4);
    for (let it = 1; it <= clones; it++) {
      let clone = button.querySelector("svg").cloneNode(true),
        size = randomInt(5, 16);
      button.appendChild(clone);
      clone.setAttribute("width", size);
      clone.setAttribute("height", size);
      clone.style.position = "absolute";
      clone.style.transition =
        "transform 0.5s cubic-bezier(0.12, 0.74, 0.58, 0.99) 0.3s, opacity 1s ease-out .5s";
      let animTimeout = setTimeout(function () {
        clearTimeout(animTimeout);
        clone.style.transform =
          "translate3d(" +
          (plusOrMinus() * randomInt(10, 25)) +
          "px," +
          (plusOrMinus() * randomInt(10, 25)) +
          "px,0)";
        clone.style.opacity = 0;
      }, 1);
      let removeNodeTimeout = setTimeout(function () {
        clone.parentNode.removeChild(clone);
        clearTimeout(removeNodeTimeout);
      }, 900);
      let removeClassTimeout = setTimeout(function () {
        button.classList.remove("animated");
      }, 600);
    }
  }

  function plusOrMinus() {
    return Math.random() < 0.5 ? -1 : 1;
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
});
// like 2

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".like-button2");

  // Function to update the like buttons based on the user's login status
  function updateLikeButtons() {
    let userEmail = localStorage.getItem("userEmail");

    buttons.forEach((button) => {
      let userLikeKey = userEmail + "-" + button.id;
      let isLiked = localStorage.getItem(userLikeKey) === "true";

      if (isLiked) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  // Event listener for like buttons
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      var isLoggedIn = localStorage.getItem("isLoggedIn");
      var userEmail = localStorage.getItem("userEmail");

      if (isLoggedIn === "true" && userEmail) {
        let userLikeKey = userEmail + "-" + button.id;
        let hasLiked = localStorage.getItem(userLikeKey) === "true";

        if (!hasLiked) {
          this.classList.toggle("active");
          this.classList.add("animated");
          generateClones(this);
          localStorage.setItem(userLikeKey, this.classList.contains("active"));
        } else {
          this.classList.remove("active");
          localStorage.removeItem(userLikeKey);
        }
      } else {
        alert("Please log in or sign up.");
      }
    });
  });

  // Initial update of like buttons when the page loads
  updateLikeButtons();

  function generateClones(button) {
    let clones = randomInt(2, 4);
    for (let it = 1; it <= clones; it++) {
      let clone = button.querySelector("svg").cloneNode(true),
        size = randomInt(5, 16);
      button.appendChild(clone);
      clone.setAttribute("width", size);
      clone.setAttribute("height", size);
      clone.style.position = "absolute";
      clone.style.transition =
        "transform 0.5s cubic-bezier(0.12, 0.74, 0.58, 0.99) 0.3s, opacity 1s ease-out .5s";
      let animTimeout = setTimeout(function () {
        clearTimeout(animTimeout);
        clone.style.transform =
          "translate3d(" +
          (plusOrMinus() * randomInt(10, 25)) +
          "px," +
          (plusOrMinus() * randomInt(10, 25)) +
          "px,0)";
        clone.style.opacity = 0;
      }, 1);
      let removeNodeTimeout = setTimeout(function () {
        clone.parentNode.removeChild(clone);
        clearTimeout(removeNodeTimeout);
      }, 900);
      let removeClassTimeout = setTimeout(function () {
        button.classList.remove("animated");
      }, 600);
    }
  }

  function plusOrMinus() {
    return Math.random() < 0.5 ? -1 : 1;
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
});
//like 3

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".like-button3");

  // Function to update the like buttons based on the user's login status
  function updateLikeButtons() {
    let userEmail = localStorage.getItem("userEmail");

    buttons.forEach((button) => {
      let userLikeKey = userEmail + "-" + button.id;
      let isLiked = localStorage.getItem(userLikeKey) === "true";

      if (isLiked) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  // Event listener for like buttons
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      var isLoggedIn = localStorage.getItem("isLoggedIn");
      var userEmail = localStorage.getItem("userEmail");

      if (isLoggedIn === "true" && userEmail) {
        let userLikeKey = userEmail + "-" + button.id;
        let hasLiked = localStorage.getItem(userLikeKey) === "true";

        if (!hasLiked) {
          this.classList.toggle("active");
          this.classList.add("animated");
          generateClones(this);
          localStorage.setItem(userLikeKey, this.classList.contains("active"));
        } else {
          this.classList.remove("active");
          localStorage.removeItem(userLikeKey);
        }
      } else {
        alert("Please log in or sign up.");
      }
    });
  });

  // Initial update of like buttons when the page loads
  updateLikeButtons();

  function generateClones(button) {
    let clones = randomInt(2, 4);
    for (let it = 1; it <= clones; it++) {
      let clone = button.querySelector("svg").cloneNode(true),
        size = randomInt(5, 16);
      button.appendChild(clone);
      clone.setAttribute("width", size);
      clone.setAttribute("height", size);
      clone.style.position = "absolute";
      clone.style.transition =
        "transform 0.5s cubic-bezier(0.12, 0.74, 0.58, 0.99) 0.3s, opacity 1s ease-out .5s";
      let animTimeout = setTimeout(function () {
        clearTimeout(animTimeout);
        clone.style.transform =
          "translate3d(" +
          (plusOrMinus() * randomInt(10, 25)) +
          "px," +
          (plusOrMinus() * randomInt(10, 25)) +
          "px,0)";
        clone.style.opacity = 0;
      }, 1);
      let removeNodeTimeout = setTimeout(function () {
        clone.parentNode.removeChild(clone);
        clearTimeout(removeNodeTimeout);
      }, 900);
      let removeClassTimeout = setTimeout(function () {
        button.classList.remove("animated");
      }, 600);
    }
  }

  function plusOrMinus() {
    return Math.random() < 0.5 ? -1 : 1;
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
});



//like
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".like-button1");

  // Function to update the like buttons based on the user's login status
  function updateLikeButtons() {
    let userEmail = localStorage.getItem("userEmail");

    buttons.forEach((button) => {
      let userLikeKey = userEmail + "-" + button.id;
      let isLiked = localStorage.getItem(userLikeKey) === "true";

      if (isLiked) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  // Event listener for like buttons
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      var isLoggedIn = localStorage.getItem("isLoggedIn");
      var userEmail = localStorage.getItem("userEmail");

      if (isLoggedIn === "true" && userEmail) {
        let userLikeKey = userEmail + "-" + button.id;
        let hasLiked = localStorage.getItem(userLikeKey) === "true";

        if (!hasLiked) {
          this.classList.toggle("active");
          this.classList.add("animated");
          generateClones(this);
          localStorage.setItem(userLikeKey, this.classList.contains("active"));
        } else {
          this.classList.remove("active");
          localStorage.removeItem(userLikeKey);
        }
      } else {
        alert("Please log in or sign up.");
      }
    });
  });

  // Initial update of like buttons when the page loads
  updateLikeButtons();

  function generateClones(button) {
    let clones = randomInt(2, 4);
    for (let it = 1; it <= clones; it++) {
      let clone = button.querySelector("svg").cloneNode(true),
        size = randomInt(5, 16);
      button.appendChild(clone);
      clone.setAttribute("width", size);
      clone.setAttribute("height", size);
      clone.style.position = "absolute";
      clone.style.transition =
        "transform 0.5s cubic-bezier(0.12, 0.74, 0.58, 0.99) 0.3s, opacity 1s ease-out .5s";
      let animTimeout = setTimeout(function () {
        clearTimeout(animTimeout);
        clone.style.transform =
          "translate3d(" +
          (plusOrMinus() * randomInt(10, 25)) +
          "px," +
          (plusOrMinus() * randomInt(10, 25)) +
          "px,0)";
        clone.style.opacity = 0;
      }, 1);
      let removeNodeTimeout = setTimeout(function () {
        clone.parentNode.removeChild(clone);
        clearTimeout(removeNodeTimeout);
      }, 900);
      let removeClassTimeout = setTimeout(function () {
        button.classList.remove("animated");
      }, 600);
    }
  }

  function plusOrMinus() {
    return Math.random() < 0.5 ? -1 : 1;
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
});
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
      alert("I have never heard of that one.");
  }

}

function startTimerPrompt() {
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
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
  } else {
    alert("please log in or sign up.");
    return;

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

function goToProfile() {
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    var userEmail = localStorage.getItem("userEmail");
    var userPassword = localStorage.getItem("userPassword");
    window.location.href = 'user.html';
  } else {

    window.location.href = 'forms.html';
  }
}













// function startTimer(duration) {
//   const timerElement = document.getElementById("timer");
//   timerElement.textContent = "Timer: " + (duration / 1000);

//   setTimeout(function () {
//     timerElement.textContent = "Timer: 0 seconds";
//     alert('Time is over!!!');
//   }, duration);

//   const intervalId = setInterval(function () {
//     const remaining = duration - 1000;
//     if (remaining < 0) {
//       clearInterval(intervalId);
//     } else {
//       timerElement.textContent = "Timer: " + (remaining / 1000);
//     }
//     duration = remaining;
//   }, 1000);
// }


// function startTimer1(duration) {
//   const timerElement = document.getElementById("timer1");
//   timerElement.textContent = "Timer: " + (duration / 1000);

//   setTimeout(function () {
//     timerElement.textContent = "Timer: 0 seconds";
//     alert('Time is over!!!');
//   }, duration);

//   const intervalId = setInterval(function () {
//     const remaining = duration - 1000;
//     if (remaining < 0) {
//       clearInterval(intervalId);
//     } else {
//       timerElement.textContent = "Timer: " + (remaining / 1000);
//     }
//     duration = remaining;
//   }, 1000);
// }



function getLocalStorageItem(key) {
  return localStorage.getItem(key);
}

function setLocalStorageItem(key, value) {
  localStorage.setItem(key, value);
}

function getUserEmail() {
  // Вместо использования жестко закодированной почты, здесь можно добавить свой механизм получения почты пользователя из локального хранилища
  // Например, если вы храните почту под ключом "userEmail":
  return getLocalStorageItem('userEmail') || 'example@example.com';
}
