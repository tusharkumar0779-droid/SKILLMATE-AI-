// firebase.js

// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIjn9EEr9hJeSoDWPun39w1MAeY5BvMos",
  authDomain: "skill-mate-ai-b5b8f.firebaseapp.com",
  projectId: "skill-mate-ai-b5b8f",
  storageBucket: "skill-mate-ai-b5b8f.firebasestorage.app",
  messagingSenderId: "720243016023",
  appId: "1:720243016023:web:64ee8df4443844a469fe12",
  measurementId: "G-NYXCGCS9D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);

// Initialize Authentication
const auth = getAuth(app);

// Google Authentication Provider
const provider = new GoogleAuthProvider();

// Export for use in other files
export { app, auth, provider, analytics };