#include <iomanip>
#include <iostream>
#include <vector>

#include "gpa.h"

// Mirrors the sample data shown on pages/dashboard.html and pages/grades.html
// until the portal has a real backend to source grades from.
static std::vector<Course> sampleTranscript() {
    return {
        {"Intro to Programming", "A",  3},
        {"Data Structures",      "B+", 4},
        {"Calculus I",           "B-", 3}
    };
}

int main() {
    const std::vector<Course> courses = sampleTranscript();

    std::cout << "Course                  Grade   Credits   Points\n";
    std::cout << "----------------------------------------------\n";

    for (const auto& course : courses) {
        std::cout << std::left << std::setw(24) << course.name
                   << std::setw(8) << course.letterGrade
                   << std::setw(10) << course.creditHours
                   << std::fixed << std::setprecision(2)
                   << gradeToPoints(course.letterGrade) << "\n";
    }

    std::cout << "----------------------------------------------\n";
    std::cout << "Overall GPA: " << std::fixed << std::setprecision(2)
               << calculateGPA(courses) << "\n";

    return 0;
}
