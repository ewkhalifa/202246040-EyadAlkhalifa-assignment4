# Technical Documentation – Assignment 3 Portfolio Website

## Overview
This project is a personal portfolio website developed for Assignment 3.  
It builds on Assignments 1 and 2 by adding advanced functionality, external API integration, and more complex application logic.

The goal of this assignment was to transform the portfolio into a more dynamic and feature-rich web application that demonstrates real-world development concepts.

---

## Main Features

### 1. GitHub API Integration
The website fetches and displays live data from the GitHub API.

#### How it works:
- JavaScript uses `fetch()` to request repository data from GitHub
- The response is processed using `async/await`
- Repository information is dynamically inserted into the page
- Only relevant repositories are displayed (filtered and sorted)

#### Benefits:
- Keeps portfolio content up-to-date automatically
- Demonstrates real-world API usage
- Makes the website more dynamic and interactive

---

### 2. Project Filtering System (Complex Logic)
Users can filter projects based on categories such as:
- All
- AI
- Database

#### How it works:
- Each project has a category stored as a data attribute
- JavaScript checks the selected filter
- Projects are shown or hidden based on conditions
- A message updates depending on the result

This demonstrates conditional logic and multi-step decision making.

---

### 3. State Management with localStorage
The website remembers user preferences.

#### Features stored:
- Theme (dark/light mode)
- Visitor name

#### How it works:
- Data is saved using `localStorage`
- When the page loads, saved values are retrieved
- The interface updates automatically

This ensures a consistent user experience.

---

### 4. Dynamic Greeting System
The site displays:
- Time-based greeting (morning/afternoon/evening)
- Personalized greeting using the user's name

This combines dynamic content with stored user data.

---

### 5. Contact Form Validation
The form validates user input before submission.

#### Validation includes:
- Required fields must be filled
- Email format must be valid
- Message must meet minimum length

#### Feedback:
- Error messages for invalid input
- Success message when validation passes

This improves usability and meets assignment requirements for user feedback.

---

## User Feedback and Error Handling

The application clearly communicates with the user.

Examples:
- “Loading…” message when fetching API data
- Error message if GitHub API fails
- Form validation messages
- Filter result messages (e.g., “No projects found”)

This ensures the user is never left without feedback.

---

## Animation and Transitions

The project uses subtle animations to improve UX:

- Hover effects on project cards
- Smooth button transitions
- Card lift effect on hover
- Smooth scrolling between sections

These effects enhance usability without being distracting.

---

## Technologies Used

- **HTML5** for structure  
- **CSS3** for layout, design, and animations  
- **JavaScript (Vanilla JS)** for logic and interactivity  
- **GitHub API** for external data integration  
- **localStorage** for state management  

---

## File Responsibilities

### `index.html`
- Defines the structure of the website
- Contains sections for About, Projects, GitHub API, and Contact

### `css/styles.css`
- Handles layout, responsiveness, and visual design
- Defines theme styles and animations

### `js/script.js`
- Handles all JavaScript functionality:
  - API integration
  - Filtering logic
  - Theme management
  - localStorage handling
  - Form validation
  - Dynamic greeting

---

## Performance Considerations

- Images are optimized for faster loading
- Only a limited number of repositories are displayed
- Efficient DOM updates are used
- Unused code is minimized

These choices ensure smooth performance across devices.

---

## Challenges and Solutions

### Challenge 1: Integrating external data
Fetching data from the GitHub API required handling asynchronous code and errors.

**Solution:**  
Used `async/await` and error handling to ensure the site remains functional.

---

### Challenge 2: Managing multiple features together
The application includes filtering, API data, and state management.

**Solution:**  
Organized code into clear functions and structured logic to keep it maintainable.

---

### Challenge 3: Improving user experience
Ensuring the site provides clear feedback and smooth interaction.

**Solution:**  
Added messages, animations, and better UI structure.

---

## Conclusion

This Assignment 3 portfolio demonstrates significant progress by adding:

- External API integration
- Complex JavaScript logic
- State management
- Improved user feedback
- Enhanced UI and interactivity

The final result is a dynamic, modern portfolio that reflects real-world web development practices.
