// Mirrors the grading scale used by tools/gpa-calculator (kept in sync manually
// since the portal has no shared backend between the CLI tool and the browser).
var GRADE_SCALE = {
  "A": 4.0, "A-": 3.7,
  "B+": 3.3, "B": 3.0, "B-": 2.7,
  "C+": 2.3, "C": 2.0, "C-": 1.7,
  "D+": 1.3, "D": 1.0, "D-": 0.7,
  "F": 0.0
};

function readCourseRows() {
  var rows = document.querySelectorAll("#summaryTable tr[data-grade]");
  var courses = [];
  rows.forEach(function (row) {
    courses.push({
      grade: row.getAttribute("data-grade"),
      credits: parseInt(row.getAttribute("data-credits"), 10) || 0
    });
  });
  return courses;
}

function computeStats(courses) {
  var totalCredits = 0;
  var totalPoints = 0;

  courses.forEach(function (course) {
    var points = GRADE_SCALE.hasOwnProperty(course.grade) ? GRADE_SCALE[course.grade] : 0;
    totalCredits += course.credits;
    totalPoints += points * course.credits;
  });

  var gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;

  return {
    credits: totalCredits,
    courseCount: courses.length,
    gpa: gpa
  };
}

document.addEventListener("DOMContentLoaded", function () {
  var stats = computeStats(readCourseRows());
  document.getElementById("statCredits").textContent = stats.credits;
  document.getElementById("statCourses").textContent = stats.courseCount;
  document.getElementById("statGPA").textContent = stats.gpa.toFixed(2);
});
