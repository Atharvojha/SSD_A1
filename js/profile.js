var PROFILE_STORAGE_KEY = "sp_profile";
var DEFAULT_PROFILE = {
  name: "Alex Student",
  id: "S1024783",
  email: "alex.student@example.edu",
  major: "Computer Science"
};

function loadProfile() {
  var stored = localStorage.getItem(PROFILE_STORAGE_KEY);
  if (!stored) {
    return DEFAULT_PROFILE;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return DEFAULT_PROFILE;
  }
}

function saveProfile(profile) {
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
}

function renderProfile(profile) {
  document.getElementById("profileName").textContent = profile.name;
  document.getElementById("profileId").textContent = profile.id;
  document.getElementById("profileEmail").textContent = profile.email;
  document.getElementById("profileMajor").textContent = profile.major;

  document.getElementById("editName").value = profile.name;
  document.getElementById("editEmail").value = profile.email;
  document.getElementById("editMajor").value = profile.major;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showProfileError(message) {
  var errorEl = document.getElementById("profileError");
  errorEl.textContent = message;
  errorEl.style.display = "block";
}

function hideProfileError() {
  document.getElementById("profileError").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  var profile = loadProfile();
  renderProfile(profile);

  var profileForm = document.getElementById("profileForm");
  profileForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("editName").value.trim();
    var email = document.getElementById("editEmail").value.trim();
    var major = document.getElementById("editMajor").value.trim();

    if (!name || !email || !major) {
      showProfileError("All fields are required.");
      return;
    }

    if (!isValidEmail(email)) {
      showProfileError("Please enter a valid email address.");
      return;
    }

    hideProfileError();

    profile = { name: name, id: profile.id, email: email, major: major };
    saveProfile(profile);
    renderProfile(profile);
  });
});
