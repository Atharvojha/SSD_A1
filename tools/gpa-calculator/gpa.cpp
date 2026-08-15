#include "gpa.h"

#include <map>
#include <stdexcept>

double gradeToPoints(const std::string& letterGrade) {
    static const std::map<std::string, double> scale = {
        {"A",  4.0}, {"A-", 3.7},
        {"B+", 3.3}, {"B",  3.0}, {"B-", 2.7},
        {"C+", 2.3}, {"C",  2.0}, {"C-", 1.7},
        {"D+", 1.3}, {"D",  1.0}, {"D-", 0.7},
        {"F",  0.0}
    };

    auto it = scale.find(letterGrade);
    if (it == scale.end()) {
        throw std::invalid_argument("Unrecognized letter grade: " + letterGrade);
    }
    return it->second;
}

double calculateGPA(const std::vector<Course>& courses) {
    if (courses.empty()) {
        throw std::invalid_argument("Cannot calculate GPA with no courses");
    }

    double totalPoints = 0.0;
    int totalCreditHours = 0;

    for (const auto& course : courses) {
        totalPoints += gradeToPoints(course.letterGrade) * course.creditHours;
        totalCreditHours += course.creditHours;
    }

    if (totalCreditHours == 0) {
        throw std::invalid_argument("Total credit hours cannot be zero");
    }

    return totalPoints / totalCreditHours;
}
