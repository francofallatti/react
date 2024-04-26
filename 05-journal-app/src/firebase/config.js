// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYPA3zo65uBE0ypUXf1NweU7o49BIhMS4",
  authDomain: "react-3e15e.firebaseapp.com",
  projectId: "react-3e15e",
  storageBucket: "react-3e15e.appspot.com",
  messagingSenderId: "1010092199736",
  appId: "1:1010092199736:web:e2f966b78791e7f5fbbbcd",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
