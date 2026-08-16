// Legacy student portal client-side logic (pre-refactor)
var VALID_USER = "student";
var VALID_PASS = "password123";

document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var user = document.getElementById("username").value;
      var pass = document.getElementById("password").value;

      if (user == VALID_USER && pass == VALID_PASS) {
        window.location = "pages/dashboard.html";
      } else {
        document.getElementById("loginError").style.display = "block";
      }
    });
  }
});
