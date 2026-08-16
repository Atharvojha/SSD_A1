// Legacy student portal client-side logic (pre-refactor)
var VALID_USER = "student";
var VALID_PASS = "password123";

function showLoginError(message) {
  var errorEl = document.getElementById("loginError");
  errorEl.textContent = message;
  errorEl.style.display = "block";
}

function hideLoginError() {
  var errorEl = document.getElementById("loginError");
  errorEl.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var user = document.getElementById("username").value.trim();
      var pass = document.getElementById("password").value.trim();

      if (!user || !pass) {
        showLoginError("Please enter both a username and password.");
        return;
      }

      hideLoginError();

      if (user == VALID_USER && pass == VALID_PASS) {
        window.location = "pages/dashboard.html";
      } else {
        showLoginError("Invalid username or password.");
      }
    });
  }
});
