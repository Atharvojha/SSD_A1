var THEME_STORAGE_KEY = "sp_theme";

function applyStoredTheme() {
  var theme = localStorage.getItem(THEME_STORAGE_KEY);
  if (theme === "dark") {
    document.documentElement.classList.add("theme-dark");
  } else {
    document.documentElement.classList.remove("theme-dark");
  }
}

function setTheme(theme) {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  applyStoredTheme();
}

applyStoredTheme();
