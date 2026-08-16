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

var failedAttempts = 0;
var LOCKOUT_MS = 1000;

document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("loginForm");
  var loginBtn = document.getElementById("loginBtn");

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
        failedAttempts = 0;
        sessionStorage.setItem("sp_authenticated", "true");
        sessionStorage.setItem("sp_username", user);
        window.location = "pages/dashboard.html";
        return;
      }

      failedAttempts++;
      var message = "Invalid username or password.";
      if (failedAttempts >= 3) {
        message += " Hint: check that Caps Lock is off.";
      }
      showLoginError(message);

      loginBtn.disabled = true;
      window.setTimeout(function () {
        loginBtn.disabled = false;
      }, LOCKOUT_MS);
    });
  }
});
