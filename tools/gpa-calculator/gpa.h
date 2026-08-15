#ifndef GPA_H
#define GPA_H

#include <string>
#include <vector>

struct Course {
    std::string name;
    std::string letterGrade;
    int creditHours;
};

// Converts a letter grade (e.g. "A", "B+", "C-") to grade points on a 4.0 scale.
// Throws std::invalid_argument if the letter grade is not recognized.
double gradeToPoints(const std::string& letterGrade);

// Computes the credit-hour-weighted GPA across all courses.
// Throws std::invalid_argument if courses is empty or contains an unrecognized grade.
double calculateGPA(const std::vector<Course>& courses);

#endif
