// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';  // Import other Firebase services as needed

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyDg0_Ujk3jG-Rw_Ho89EhOXTEdMBn3zfh4", // Replace with your Firebase config
  authDomain: "react-tmdb-assignment.firebaseapp.com",
  projectId: "react-tmdb-assignment",
  storageBucket: "react-tmdb-assignment.appspot.com",
  messagingSenderId: "1040281060761",
  appId: "1:1040281060761:web:d292226bdf01d1df447f08",
  measurementId: "G-D1XEKS4CGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

// Export the initialized Firebase app and auth instance
export { auth };
