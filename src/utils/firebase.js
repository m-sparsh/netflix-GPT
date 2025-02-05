// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI4a1VzU73vm4Ss_kGLrhdwC5U5Jct-gg",
  authDomain: "netflixgpt-87362.firebaseapp.com",
  projectId: "netflixgpt-87362",
  storageBucket: "netflixgpt-87362.firebasestorage.app",
  messagingSenderId: "970394234064",
  appId: "1:970394234064:web:1da6775607a01993f802d5",
  measurementId: "G-QRSF5L5DT6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
