// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOmbLT67IffSG4PWc6U7MP1xe3ul0PCYY",
  authDomain: "personal-restaurant.firebaseapp.com",
  projectId: "personal-restaurant",
  storageBucket: "personal-restaurant.appspot.com",
  messagingSenderId: "1060663526226",
  appId: "1:1060663526226:web:c5d9a9e30e654f5f09308b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;