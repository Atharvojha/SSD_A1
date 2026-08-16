// Redirects unauthenticated visitors away from protected pages back to login.
// Pages including this script must first define `SP_LOGIN_PATH` — a relative
// path back to index.html from that page's location.
(function () {
  if (typeof SP_LOGIN_PATH === "undefined") {
    throw new Error("guard.js requires SP_LOGIN_PATH to be defined before it is loaded");
  }

  if (sessionStorage.getItem("sp_authenticated") !== "true") {
    window.location = SP_LOGIN_PATH;
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  var logoutLinks = document.querySelectorAll(".logout-link");
  logoutLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      sessionStorage.removeItem("sp_authenticated");
      sessionStorage.removeItem("sp_username");
    });
  });
});
