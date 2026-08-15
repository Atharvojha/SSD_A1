# Student Portal

A legacy student portal codebase (static HTML/CSS/vanilla JS, no build tooling)
slated for overhaul: modernized tooling, structure, and feature work.

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- [Git](https://git-scm.com/) for cloning the repository
- Python 3 or Node.js (either works) to run a local static file server —
  the app can technically be opened directly from disk, but serving it
  over HTTP avoids `file://` quirks such as blocked relative fetches

## Getting Started

Clone the repository and move into the project directory:

```bash
git clone git@github.com:Atharvojha/SSD_A1.git
cd SSD_A1
```

(If you haven't set up SSH access with GitHub, use the HTTPS URL instead:
`git clone https://github.com/Atharvojha/SSD_A1.git`)

## Running Locally

Start a static file server from the project root, then open it in your browser.

Using Python 3:

```bash
python3 -m http.server 8000
```

Using Node.js:

```bash
npx http-server -p 8000
```

Then visit `http://localhost:8000` in your browser. You'll land on the
login page (`index.html`); see [Demo Credentials](#demo-credentials) below
to sign in.

## Structure

| Path                  | Description                                              |
|------------------------|-----------------------------------------------------------|
| `index.html`           | Login page and entry point                                |
| `pages/dashboard.html` | Post-login landing page with a course/grade summary table |
| `pages/courses.html`   | List of enrolled courses                                  |
| `pages/grades.html`    | Per-assignment grade breakdown                             |
| `css/style.css`        | Shared styles used across all pages                       |
| `js/main.js`           | Shared client-side logic (currently: login form handling)  |
| `includes/`            | Reserved for shared partials during the overhaul           |

## Demo Credentials

The login form currently checks credentials against values hardcoded in
`js/main.js` (there is no backend yet). To sign in locally:

- Username: `student`
- Password: `password123`

> **Note:** Client-side hardcoded credentials are a known legacy issue and
> are slated for removal once real authentication is introduced during the
> overhaul.

## Status

Baseline import prior to overhaul. See project issues/PRs for planned work.
