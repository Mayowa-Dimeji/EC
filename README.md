# EC

# Feedback Rating Web Application

An engaging, responsive, and interactive web page for attendees of **Botterill & Bartlett's 1-Day Business Workshop** to share their feedback. This project features a polished and functional rating system developed with PHP, HTML, SCSS, JavaScript, and Bootstrap. By Mayowa Oladimeji

## Objective

Build a dynamic web page where users can:

- Rate their experience on a scale of 1 (awful) to 5 (awesome).
- Provide their name and email for personalized feedback.

This project includes JavaScript for interactivity, PHP for server-side functionality, and SCSS with Bootstrap for a clean, responsive design.

---

## Features

### Core Features

1. **Header Section**:
   - Displays the workshop name: _"Rate Botterill & Bartlett’s 1-Day Business Workshop!"_
2. **Main Section**:

   - A personalized, animated introduction with typing effects: _"We’re all ears! How was it for you?"_
   - Interactive form fields:
     - **Full Name** (required)
     - **Email** (required, validated)
     - **Star Rating System** (hover and click effects)

3. **Thank-You Page**:

   - Displays:
     - Personalized message with the user's first name.
     - Rating-specific message and a corresponding GIF.
     - Countdown timer (5 seconds) before returning to the intro page.
   - Animated transitions between sections.

4. **Loader**:
   - Displays a spinning loader during the countdown.

### Responsive Design

- Fully responsive across all devices using **Bootstrap 5**.
- Adjusts layouts, fonts, and paddings for better usability on smaller screens.

---

## Technology Stack

### Frontend

- **HTML5**: For page structure.
- **SCSS**: For modular and responsive styling.
- **Bootstrap 5**: For responsive design and utility classes.
- **JavaScript**: For interactivity and dynamic content rendering.

### Backend

- **PHP**: For processing and rendering dynamic content.

### Animations

- CSS animations for transitions, typing effects, and loaders.

---

## Installation and Setup

### Prerequisites

- **PHP**: Ensure PHP is installed on your local machine.
- **Browser**: Any modern browser (e.g., Chrome, Firefox).

- cd EC folder
- php -S localhost:8000
- go to http://localhost:8000
