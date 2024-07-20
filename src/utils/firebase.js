// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7_P-bb1i3428cMC3jRYfOyJoYiN4BK-8",
  authDomain: "netflixgpt-e6aa8.firebaseapp.com",
  projectId: "netflixgpt-e6aa8",
  storageBucket: "netflixgpt-e6aa8.appspot.com",
  messagingSenderId: "584824208486",
  appId: "1:584824208486:web:ad9b76bba2e1dc322741a7",
  measurementId: "G-MP2V4QYEPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();