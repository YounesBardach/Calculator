<p align="center">
  <img src="https://i.postimg.cc/mDJ2zzQL/Chat-GPT-Image-Aug-13-2025-12-36-17-AM.png" alt="Blog API Banner" width="900" />
</p>

<div align="center">

# Calculator

Practice project to build an on‑screen calculator using vanilla JavaScript. Part
of The Odin Project — Foundations.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](https://developer.mozilla.org/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=github&logoColor=white)](https://pages.github.com/)

</div>

---

## Table of Contents

- [Live URL](#live-url)
- [Quick start (local)](#quick-start-local)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Usage](#usage)
- [Notes](#notes)

---

## Live URL

- GitHub Pages: https://younesbardach.github.io/Calculator/
- Assignment: https://www.theodinproject.com/lessons/foundations-calculator

## Quick start (local)

No build step is required.

1. Clone the repo
2. Open `index.html` in your browser (or use a local server such as VS Code Live
   Server)

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

## Tech stack

- HTML5
- CSS3
- JavaScript

## Project structure

- `index.html` — markup and button layout
- `style/style.css` — styles for layout and buttons
- `script/script.js` — calculator logic, including keyboard bindings and
  expression handling

## Usage

- Click the on‑screen buttons or type using the keyboard
- Press `=` or `Enter` to evaluate
- Press `C` to clear and `Backspace` to remove the last character

## Notes

- The calculator evaluates expressions according to operator precedence
- Consecutive operators are normalized (e.g., `--` -> `+`, `+-` -> `-`) where
  appropriate
- Division by zero results in a non‑crashing message on the display
