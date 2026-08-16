var NOTIFICATIONS_STORAGE_KEY = "sp_notifications";
var DEFAULT_NOTIFICATIONS = { grades: true, announcements: false };

function loadNotificationPrefs() {
  var stored = localStorage.getItem(NOTIFICATIONS_STORAGE_KEY);
  if (!stored) {
    return DEFAULT_NOTIFICATIONS;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return DEFAULT_NOTIFICATIONS;
  }
}

function saveNotificationPrefs(prefs) {
  localStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(prefs));
}

document.addEventListener("DOMContentLoaded", function () {
  var darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.checked = localStorage.getItem(THEME_STORAGE_KEY) === "dark";

  darkModeToggle.addEventListener("change", function () {
    setTheme(darkModeToggle.checked ? "dark" : "light");
  });

  var notifyGrades = document.getElementById("notifyGrades");
  var notifyAnnouncements = document.getElementById("notifyAnnouncements");
  var prefs = loadNotificationPrefs();
  notifyGrades.checked = prefs.grades;
  notifyAnnouncements.checked = prefs.announcements;

  function persistNotificationPrefs() {
    saveNotificationPrefs({
      grades: notifyGrades.checked,
      announcements: notifyAnnouncements.checked
    });
  }

  notifyGrades.addEventListener("change", persistNotificationPrefs);
  notifyAnnouncements.addEventListener("change", persistNotificationPrefs);

  var passwordForm = document.getElementById("passwordForm");
  var passwordError = document.getElementById("passwordError");
  var passwordSuccess = document.getElementById("passwordSuccess");

  passwordForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var current = document.getElementById("currentPassword").value;
    var next = document.getElementById("newPassword").value;
    var confirm = document.getElementById("confirmPassword").value;

    passwordSuccess.style.display = "none";

    if (!current || !next || !confirm) {
      passwordError.textContent = "All fields are required.";
      passwordError.style.display = "block";
      return;
    }

    if (next.length < 8) {
      passwordError.textContent = "New password must be at least 8 characters.";
      passwordError.style.display = "block";
      return;
    }

    if (next !== confirm) {
      passwordError.textContent = "New password and confirmation do not match.";
      passwordError.style.display = "block";
      return;
    }

    passwordError.style.display = "none";
    passwordSuccess.style.display = "block";
    passwordForm.reset();
    window.setTimeout(function () {
      passwordSuccess.style.display = "none";
    }, 3000);
  });
});
