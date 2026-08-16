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

document.addEventListener("DOMContentLoaded", function () {
  var profile = loadProfile();
  renderProfile(profile);

  var profileForm = document.getElementById("profileForm");
  profileForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var updated = {
      name: document.getElementById("editName").value.trim(),
      id: profile.id,
      email: document.getElementById("editEmail").value.trim(),
      major: document.getElementById("editMajor").value.trim()
    };

    profile = updated;
    saveProfile(profile);
    renderProfile(profile);
  });
});
