document.addEventListener("DOMContentLoaded", function () {
  var darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.checked = localStorage.getItem(THEME_STORAGE_KEY) === "dark";

  darkModeToggle.addEventListener("change", function () {
    setTheme(darkModeToggle.checked ? "dark" : "light");
  });
});
