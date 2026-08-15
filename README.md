# Student Portal

A legacy student portal codebase (static HTML/CSS/vanilla JS, no build tooling)
slated for overhaul: modernized tooling, structure, and feature work.

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- [Git](https://git-scm.com/) for cloning the repository
- Python 3 or Node.js (either works) to run a local static file server —
  the app can technically be opened directly from disk, but serving it
  over HTTP avoids `file://` quirks such as blocked relative fetches

## Structure

- `index.html` - login page
- `pages/` - dashboard, courses, grades
- `css/style.css` - shared styles
- `js/main.js` - shared client-side logic
- `includes/` - reserved for shared partials during the overhaul

## Status

Baseline import prior to overhaul. See project issues/PRs for planned work.
