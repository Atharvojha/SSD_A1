CXX = c++
CXXFLAGS = -std=c++17 -Wall -Wextra -O2
TARGET = gpa_calculator
SOURCES = main.cpp gpa.cpp

.PHONY: all clean run

all: $(TARGET)

$(TARGET): $(SOURCES) gpa.h
	$(CXX) $(CXXFLAGS) -o $(TARGET) $(SOURCES)

run: $(TARGET)
	./$(TARGET)

clean:
	rm -f $(TARGET)
