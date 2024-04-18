// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5b88b.firebaseapp.com",
  projectId: "mern-estate-5b88b",
  storageBucket: "mern-estate-5b88b.appspot.com",
  messagingSenderId: "1014178324750",
  appId: "1:1014178324750:web:7ea74d697fabc123adf75f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);