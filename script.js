// Show and hide popup

document.getElementById("btn-click").addEventListener("click", () => {
  document.querySelector(".modal-section").style.display = "block";
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".modal-section").style.display = "none";
});

// Show and hide popup STOP

// Activate toggle menu

$(document).ready(function() {
  $(".toggle-menu").click(function() {
    $(".main-nav").toggleClass("toggle-active");
  });
});

// Activate toggle menu STOP

// Check form

document.getElementById("login-form").addEventListener("submit", e => {
  e.preventDefault();

  let login = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  fetch("https://recruitment-api.pyt1.stg.jmr.pl/login", {
    method: "POST",
    body: JSON.stringify({
      login: login,
      password: password
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => {
      document.getElementById("response").innerHTML = json.message;
    });
});

// Check form STOP
