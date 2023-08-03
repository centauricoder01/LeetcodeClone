// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from  "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6kF5zJNGN7r39_GEvuajucke7zL-Uf3c",
  authDomain: "leedcode-auth.firebaseapp.com",
  projectId: "leedcode-auth",
  storageBucket: "leedcode-auth.appspot.com",
  messagingSenderId: "958551912872",
  appId: "1:958551912872:web:8ef5006060f89a4f1aed9d",
  measurementId: "G-LMKGRHZQJ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app)
