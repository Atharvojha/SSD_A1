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

function sortTableRows(table, sortKey, ascending) {
  var rows = Array.prototype.slice.call(table.querySelectorAll("tr[data-grade]"));

  rows.sort(function (a, b) {
    var valueA, valueB;
    if (sortKey === "grade") {
      valueA = GRADE_SCALE[a.getAttribute("data-grade")] || 0;
      valueB = GRADE_SCALE[b.getAttribute("data-grade")] || 0;
    } else {
      valueA = a.cells[0].textContent.toLowerCase();
      valueB = b.cells[0].textContent.toLowerCase();
    }

    if (valueA < valueB) return ascending ? -1 : 1;
    if (valueA > valueB) return ascending ? 1 : -1;
    return 0;
  });

  rows.forEach(function (row) {
    table.appendChild(row);
  });
}

function setupSortableTable() {
  var table = document.getElementById("summaryTable");
  var headers = table.querySelectorAll("th.sortable");

  headers.forEach(function (header) {
    header.style.cursor = "pointer";
    header.dataset.ascending = "true";

    header.addEventListener("click", function () {
      var ascending = header.dataset.ascending === "true";
      sortTableRows(table, header.dataset.sortKey, ascending);
      header.dataset.ascending = ascending ? "false" : "true";
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var stats = computeStats(readCourseRows());
  document.getElementById("statCredits").textContent = stats.credits;
  document.getElementById("statCourses").textContent = stats.courseCount;
  document.getElementById("statGPA").textContent = stats.gpa.toFixed(2);

  setupSortableTable();
});
