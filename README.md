# 🌍 Fluently — Learn and speak the world’s languages with ease

Fluently is a **modern Online Tutor Booking Platform** designed to connect users with expert language tutors quickly and effortlessly. Whether you’re a beginner or just brushing up your fluency, Fluently lets you learn at your own pace with the guidance of a private tutor — from the comfort of your home.

---

## 🔑 Key Features

- **Responsive Design:** Seamless experience across smartphones, tablets, and desktops
- **User Authentication:** Signup, login, and Google Sign-In supported, with JWT-protection for private routes
- **Browse Tutors:** Filter by language, view profiles, reviews, pricing, and ratings
- **Book Sessions:** Book a private tutor directly from their profile page
- **Manage Bookings:** View and review your booking history
- **Add Tutorials:** Authenticated users can add their own tutors
- **My Tutorials:** Update or delete your own added tutors
- **Dark/Light Theme:** Easily switch between light and dark modes
- **Loading States & Animations:** User-friendly loaders, alerts, and smooth UI transitions
- **Reviews:** Provide feedback and reviews for tutors after booking

---

## 🛠️ Technologies & NPM Packages Used

- **React Ecosystem:**

  - `react` (^19.1.0)
  - `react-dom` (^19.1.0)
  - `react-router` (^7.6.1)
  - `react-router-dom` (^7.6.2)

- **Styling & UI Components:**

  - `tailwindcss` (^4.1.8)
  - `daisyui` (^5.0.43)
  - `@tailwindcss/vite` (^4.1.8)

- **Authentication & Backend:**

  - `firebase` (^11.8.1)

- **HTTP & Data Fetching:**

  - `axios` (^1.9.0)

- **UI & Interaction Enhancements:**
  - `react-icons` (^5.5.0)
  - `react-slick` (^0.30.3)
  - `slick-carousel` (^1.8.1)
  - `react-spinners` (^0.17.0)
  - `react-toastify` (^11.0.5)
  - `react-tooltip` (^5.28.1)
  - `sweetalert2` (^11.22.0)
  - `react-countup` (^6.5.3)
  - `motion` (^12.16.0)
  - `lottie-react` (^2.4.1)

---

## 🌐 Live Site

[https://fluently-web.firebaseapp.com/](https://fluently-web.firebaseapp.com/)

[https://fluently-web.web.app/](https://fluently-web.web.app/)

---

## 📁 Project Structure (Major Pages)

- **Home:** Banner, Categories, Testimonials, Why Fluently
- **Find Tutors:** All tutors or filter by Categories
- **Tutor Details:** View profile and book
- **My Booked Tutors:** Your booking history with reviews
- **Add Tutorial:** Provide details to add a new tutor
- **My Tutorials:** Update or delete your own tutorials
- **Auth:** Signup, Signin, Google Sign-In
- **Error page:** Handle invalid routes gracefully

---

## 🔐 Security & Deployment Guidelines

- Firebase config and API credentials are kept in environment variables
- JWT authentication safeguards private routes
- CORS and 404, 500 handlers implemented on the backend
- Domain is authorized in Firebase settings
- Loading fallback to handle asynchronous operations gracefully

---

## ⭐ Optional Features Implemented

- Loading spinners during data fetch
- Dark/Light theme toggle for a better UX
- Animations and transitions for smoother UI
- User reviews count
- Success messages and alerts (SweetAlert2, Toastify)

---

## 📝 Conclusion

Fluently aims to bridge the gap between language learners and expert tutors worldwide by providing a seamless and intuitive platform. With its rich features, secure authentication, and responsive design, it empowers users to pursue language learning effectively and confidently.

---

## 💬 Feedback & Contributions

Your feedback is invaluable! If you find any issues or have suggestions to improve Fluently, please open an issue or submit a pull request. Contributions from the community are always welcome to make Fluently better for everyone.

Thank you for exploring Fluently!

---
