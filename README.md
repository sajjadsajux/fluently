# 🌍 Fluently (Learn and speak the world’s languages with ease)

## 🟣 Project Overview

Fluently is an **Online Tutor Booking Platform** designed to connect users with tutors across various languages and subjects. It simplifies the process of finding, reviewing, and booking tutors through an interactive and user-friendly interface.

The platform promotes accessible learning globally and streamlines the tutor hiring process. Users can browse categories, view detailed tutor profiles, book sessions securely, add tutorials, manage bookings, and review tutors to enhance engagement.

---

## 🔑 Key Features

- **Responsive Design:** Works seamlessly on mobile, tablet, and desktop devices
- **User Authentication:** Email/password login, Google Sign-In, with JWT-based private route protection
- **Browse Tutors:** Search and filter tutors by language categories
- **Tutor Profiles:** Detailed views with name, image, language, price, reviews, and booking option
- **Book Tutors:** Secure booking with data saved in database
- **Manage Bookings:** Users can view booked tutors and add reviews
- **Add Tutorials:** Logged-in users can add new tutorials (tutors)
- **My Tutorials:** Users can view, update, or delete their added tutorials
- **Dark/Light Theme Toggle:** Switch between dark and light modes in the navbar
- **Animations:** Smooth UI animations using Motion and React CountUp
- **Loading States & Alerts:** User-friendly spinners and notifications with React Spinners and SweetAlert2

---

## 🛠️ Technologies & NPM Packages Used

- **React** (`react`, `react-dom`, `react-router`)
- **TailwindCSS** & **DaisyUI** for styling and UI components
- **Firebase** for authentication and backend services
- **Axios** for HTTP requests
- **React Icons** for icons
- **React Slick** & **Slick Carousel** for carousels/sliders
- **React Spinners** for loading indicators
- **React Toastify** for notifications
- **React Tooltip** for tooltips
- **SweetAlert2** for alert popups
- **React CountUp** for animated counters
- **Motion** for animations

---

## 🚀 Live Site

Access the live site here:  
[https://fluently-web.firebaseapp.com/](https://fluently-web.firebaseapp.com/)

---

## 📂 Project Structure & Pages

- **Navbar:**

  - Website logo/name reflecting the theme
  - Navigation links: Home, Find Tutors, Add Tutorials, My Tutorials, My Booked Tutors
  - Login/Logout button with conditional rendering
  - Profile picture dropdown showing user display name

- **Home Page:**

  - Banner carousel with relevant images
  - Stats section showing counts for tutors, reviews, languages, users
  - Language category cards (minimum 9), clickable to browse tutors by category
  - Additional relevant sections to engage users

- **Find Tutors Page:**

  - Displays all tutors or tutors filtered by category
  - Search functionality by language
  - Tutor cards showing name, image, language, price, reviews, and a details button

- **Tutor Details Page (Private Route):**

  - Detailed tutor information with booking option
  - Booking stores data in database linking tutor and user

- **My Booked Tutors (Private Route):**

  - Lists all booked tutors with review functionality

- **Add Tutorials (Private Route):**

  - Form to add new tutors/tutorials with required fields

- **My Tutorials (Private Route):**

  - Table view of user’s tutorials
  - Update and delete functionality

- **Authentication Pages:**

  - Registration and login with error handling
  - Google sign-in support

- **Dark/Light Theme Toggle** available in navbar

- **Error Page & Loading States** handled gracefully

---

## 🔐 Security & Deployment Guidelines

- Firebase config and MongoDB credentials secured via environment variables
- JWT token implemented for authentication and protecting private routes
- Server deployed without CORS, 404, or 504 errors
- Domain authorized in Firebase for deployment
- No redirect to login on page reload of private routes
- Proper alignment, spacing, and accessible color contrast used in UI design

---

## ✔️ Optional Features Implemented

- Loading spinners during data fetch
- Dark/Light theme toggle for better UX

---
