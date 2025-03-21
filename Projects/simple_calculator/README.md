# Simple Web-Based Calculator

This project is a clean, beginner-friendly web-based calculator built using **HTML5**, **CSS3**, and **vanilla JavaScript**. It is designed to help beginners understand DOM manipulation, event handling, and simple UI construction.

## Features

- Responsive calculator interface
- Button-based input for digits and operators
- Keyboard input support (numbers, operators, Enter, Backspace, and Escape)
- Display initialized with `0` and cleared back to `0`
- Real-time input and result display
- Error handling for invalid expressions

## Technologies Used

- **HTML5** for structure
- **CSS3** for layout and styling (using CSS Grid and Flexbox)
- **Vanilla JavaScript** for interactive logic and event handling

## How It Works

1. The calculator interface consists of an input field for display and a set of number/operator buttons.
2. User input is handled by click events on buttons or keyboard input via `keydown` event listeners.
3. Values and operators are appended to the display or cleared/calculated on demand.
4. Arithmetic evaluation is currently performed using aa custom arithmetic parser with error handling.
5. The display always defaults to `0` until the user provides input or a result is shown.
6. Unit test added to be shown in browser console

## Project Structure

- simple_calculator/
    - 📜 index.html
    - 📜 style.css
    - 📜 script.js
    - 📜 README.md

## Past stages

- Arithmetic evaluation used to be performed using the built-in `eval()` function with error handling.

## Future Improvements

- Add parentheses support
- Handle division by "0"
- Handle display text overflow
- Include scientific functions (square root, power, etc.)
- Add light/dark theme toggle

## How to Run

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
3. Start using the calculator via mouse clicks or keyboard.

---

## License

This project is open-source and free for educational use.