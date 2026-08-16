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
});
