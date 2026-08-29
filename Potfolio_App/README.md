# Samar's Portfolio

A modern, responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. It features a dark theme, animated typing effect, scroll-based interactions, and a fully working contact form with client-side validation.

![Portfolio Preview](images/Screenshot%20From%202026-08-29%2000-51-32.png)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [License](#license)

## Features

- **Responsive navigation bar** with a mobile hamburger menu
- **Animated typing effect** in the hero section that cycles through multiple roles (Web Developer, Frontend Developer, UI Designer, Freelancer)
- **About section** with profile photo and personal details
- **Skills section** displaying core competencies as icon-based cards
- **Projects section** showcasing completed work with image cards and links
- **Contact form** with client-side validation (required fields + email format check)
- **Scroll-based active nav highlighting** — the current section is highlighted in the nav as you scroll
- **Header background transition** on scroll
- **Scroll-reveal animations** powered by the Intersection Observer API
- **Auto-updating footer year** via JavaScript

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Custom properties, Flexbox, Grid, media queries, transitions |
| JavaScript (ES6, Vanilla) | DOM manipulation, event handling, Intersection Observer |
| [Google Fonts](https://fonts.google.com/) (Poppins) | Typography |
| [Font Awesome](https://fontawesome.com/) | Icons |

No frameworks, build tools, or dependencies required — it's pure HTML/CSS/JS.

## Project Structure

```
Portfolio_App/
├── index.html          # Main page markup
├── style.css           # All styling (theme variables, layout, responsiveness)
├── script.js           # Interactivity (nav, typing effect, scroll effects, form validation)
└── images/              # Profile photo and project screenshots
```



## Customization

- **Colors & theme:** edit the CSS custom properties at the top of `style.css`:

  ```css
  :root {
    --primary: #6366f1;
    --secondary: #22d3ee;
    --background: #0f172a;
    ...
  }
  ```

- **Personal info:** update your name, role list (`roles` array in `script.js`), email, and social links directly in `index.html`.
- **Projects:** add or edit project cards inside the `#projects` section of `index.html`, and drop new screenshots into `images/`.

## Browser Support

Tested on the latest versions of Chrome, Firefox, Edge, and Safari. Responsive breakpoints are included for tablets (900px) and mobile (650px, 400px).

## License

This project is open source and available for personal and educational use.

---

**Author:** Samar Hussain
