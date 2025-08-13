<p align="center">
  <img src="https://i.postimg.cc/mDJ2zzQL/Chat-GPT-Image-Aug-13-2025-12-36-17-AM.png" alt="Blog API Banner" width="900" />
</p>

# Calculator

An on‑screen calculator built with HTML, CSS, and vanilla JavaScript. This
project was created as part of The Odin Project Foundations curriculum to
practise JavaScript fundamentals such as DOM manipulation, event handling, and
implementing logic without relying on `eval()`.

• Live demo: https://younesbardach.github.io/Calculator/  
• Assignment: https://www.theodinproject.com/lessons/foundations-calculator

## Features

- Basic operations: add, subtract, multiply, divide
- Operator precedence: multiplication/division are evaluated before
  addition/subtraction
- Negative numbers and leading plus/minus are handled
- Decimals with rounding of long results to avoid overflow in the display
- Backspace and clear controls
- Keyboard support (numpad and standard keys): digits 0–9, `+`, `-`, `*`, `/`,
  `.`; `Enter` for equals, `Backspace` to erase, and `C` to clear
- Friendly error messages for malformed expressions and division by zero

## Getting started

No build step is required.

1. Clone the repo
2. Open `index.html` in your browser (or use a local server such as VS Code Live
   Server)

## Usage

- Click the on‑screen buttons or type using the keyboard
- Press `=` or `Enter` to evaluate
- Press `C` to clear and `Backspace` to remove the last character

Notes:

- The calculator evaluates expressions according to operator precedence
- Consecutive operators are normalized (e.g., `--` -> `+`, `+-` -> `-`) where
  appropriate
- Division by zero results in a non‑crashing message on the display

## Project structure

- `index.html` — markup and button layout
- `style/style.css` — styles for layout and buttons
- `script/script.js` — calculator logic, including keyboard bindings and
  expression handling

## Deployment

The app is deployed with GitHub Pages from the `main` branch. Any push to `main`
will trigger a new deployment.

## Acknowledgements

This project is based on The Odin Project’s Foundations assignment “Project:
Calculator.” See the brief here:
https://www.theodinproject.com/lessons/foundations-calculator
