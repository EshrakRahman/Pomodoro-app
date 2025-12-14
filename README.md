![Pomodoro App Preview](./preview.jpg)

This is my solution to the [Pomodoro app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G). The app allows users to manage their work and break intervals using a customizable timer interface with a circular progress bar.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Live Demo](#live-demo)
- [Features](#features)
- [Built With](#built-with)
- [What I Learned](#what-i-learned)
- [Continued Development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- Set a Pomodoro timer and short & long break timers
- Customize the duration of each timer
- See a circular progress bar that updates as the timer counts down
- Customize fonts and colors for the app interface

### Screenshot

![Pomodoro Screenshot](/src/assets/screenshoots/desktop.png)
![Pomodoro Screenshot](/src/assets/screenshoots/desktop-l.png)
![Pomodoro Screenshot](/src/assets/screenshoots/tablet.png)
![Pomodoro Screenshot](/src/assets/screenshoots/mobile.png)

### Live Demo

[View live site](https://pomodoroeshrak.netlify.app/)

## Features

- Dynamic Pomodoro, short break, and long break timers
- Circular progress bar with countdown
- Customizable colors and fonts
- Responsive design for mobile and desktop
- Pause/Start functionality

## Built With

- [React](https://reactjs.org/) - Frontend library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Styled Components](https://styled-components.com/) - Component-level styling
- CSS Flexbox & Grid for layout

## What I Learned

- Managing multiple states and contexts in React
- Using React Context API for global state (timers and settings)
- Animating and controlling a circular progress bar dynamically
- Structuring a React project for maintainability
- Integrating user settings to update UI in real-time

```js
// Example: Countdown timer logic with context
const [secondsLeft, setSecondsLeft] = useState(durations[mode] * 60);
useEffect(() => {
  const interval = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
  return () => clearInterval(interval);
}, [isRunning]);
```

## Continued Development

- Add sound notifications when timers end
- Save user preferences in local storage
- Add more themes and color options
- Improve accessibility for screen readers

## Author

- **Eshrak Rahman**
- Frontend Mentor - [@EshrakRahman](https://www.frontendmentor.io/profile/EshrakRahman)
- GitHub - [EshrakRahman](https://github.com/EshrakRahman)
- Live Site - [Pomodoro App](https://pomodoroeshrak.netlify.app/)

## Acknowledgments

- Thanks to Frontend Mentor for providing realistic project challenges.
- Inspired by various Pomodoro timer designs online.
