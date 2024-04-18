// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKfhyygY-936_wvMd32db15DXJe6tofVs",
  authDomain: "novo-770a7.firebaseapp.com",
  projectId: "novo-770a7",
  storageBucket: "novo-770a7.appspot.com",
  messagingSenderId: "1084334278679",
  appId: "1:1084334278679:web:c35f4974d55aba95e33452"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db= getFirestore(app);