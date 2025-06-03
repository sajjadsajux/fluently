// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS5TKULMSyeAu3GZmHq84gUvsJ8v6juMU",
  authDomain: "fluently-web.firebaseapp.com",
  projectId: "fluently-web",
  storageBucket: "fluently-web.firebasestorage.app",
  messagingSenderId: "681599707951",
  appId: "1:681599707951:web:a331788f293ad472ed8fda",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
