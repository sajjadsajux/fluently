
# 🌍 Fluently — Learn and Speak the World’s Languages with Ease

**Fluently** is a modern Online Tutor Booking Platform designed to connect users with expert language tutors quickly and effortlessly. Whether you’re a beginner or just brushing up your fluency, Fluently lets you learn at your own pace with the guidance of a private tutor — from the comfort of your home.

---

### 🖼️ Screenshot

![Fluently Home Page](https://i.ibb.co/B2nz5Hdm/Fire-Shot-Capture-011-Home-fluently-web-firebaseapp-com.png)

---



### 🛠️ Technologies Used

- **HTML**  
- **CSS**  
- **Tailwind CSS**  
- **DaisyUI**  
- **React**  
- **React Router**  
- **Node.js**  
- **Express.js**  
- **MongoDB**  
- **Firebase**

### 🛠️ Dependencies Used

#### Frontend:

* **React** (^19.1.0)  
* **React DOM** (^19.1.0)  
* **React Router** (^7.6.1)  
* **React Router DOM** (^7.6.2)  
* **Tailwind CSS** (^4.1.8)  
* **DaisyUI** (^5.0.43)  
* **@tailwindcss/vite** (^4.1.8)  

#### Backend & Authentication:

* **Firebase** (^11.8.1)  
* **JWT Authentication**  

#### HTTP & Data Fetching:

* **Axios** (^1.9.0)  

#### UI & Enhancements:

* **React Icons** (^5.5.0)  
* **React Slick** (^0.30.3)  
* **Slick Carousel** (^1.8.1)  
* **React Spinners** (^0.17.0)  
* **React Toastify** (^11.0.5)  
* **React Tooltip** (^5.28.1)  
* **SweetAlert2** (^11.22.0)  
* **React CountUp** (^6.5.3)  
* **Motion** (^12.16.0)  
* **Lottie React** (^2.4.1)  

---

### ✨ Key Features

* ✅ Responsive design across all devices  
* 🔐 Signup, login, Google Sign-In, and JWT-protected routes  
* 🔍 Browse tutors by category/language, view profiles, ratings, and pricing  
* 🗓️ Book sessions directly from a tutor's profile  
* 📁 Manage booking history and reviews  
* ➕ Authenticated users can add their own tutorials  
* 📝 Update or delete personal tutorials via "My Tutorials"  
* 🌗 Light/Dark theme toggle  
* ⚡ Smooth animations and transitions  
* 🌟 Provide post-session tutor feedback and reviews  

---

### 📁 Project Structure (Major Pages)

* **Home**: Banner, categories, testimonials, why Fluently  
* **Find Tutors**: Filter by categories and view all tutors  
* **Tutor Details**: View individual tutor profiles and book sessions  
* **My Booked Tutors**: See booking history, write reviews  
* **Add Tutorial**: Add new tutors (authenticated users only)  
* **My Tutorials**: Edit or delete your own tutorials  
* **Auth Pages**: Signup, Signin, Google Sign-In  
* **Error Page**: Handles invalid routes gracefully  

---

### 🔐 Security & Deployment Guidelines

* Firebase config and credentials are stored in environment variables  
* JWT tokens protect private and sensitive routes  
* CORS, 404, and 500 error handlers are implemented  
* Firebase authorized domains configured  
* Graceful loading fallback for async data operations  

---

### 🌟 Optional Features

* Loading spinners during data fetch  
* Dark/Light theme toggle for improved UX  
* Animations and smooth transitions  
* Dynamic review counts  
* Success alerts via SweetAlert2 and Toastify  

---

### 🛆 Run Locally

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/fluently.git
cd fluently
```

2. **Install Dependencies**

```bash
npm install
```

3. **Setup Environment Variables**  
Create a `.env` file in the root and add:

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project.appspot.com
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
```

4. **Start Development Server**

```bash
npm run dev
```

---
### 🔗 Live Site

* [fluently-web.firebaseapp.com](https://fluently-web.firebaseapp.com)
* [fluently-web.web.app](https://fluently-web.web.app)

---

### 💬 Feedback & Contributions

We welcome your feedback to make Fluently even better! If you encounter any bugs, have improvement ideas, or want to contribute new features, feel free to open an issue or suggest directly. Community contributions are highly appreciated and help this project grow stronger.

---

### 🙏 Thank You for Exploring Fluently!
