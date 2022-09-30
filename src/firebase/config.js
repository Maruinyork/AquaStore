// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWCGYGonWutfySehUVMBZmwzggKHg_DSU",
  authDomain: "fb-aqua.firebaseapp.com",
  projectId: "fb-aqua",
  storageBucket: "fb-aqua.appspot.com",
  messagingSenderId: "140293435137",
  appId: "1:140293435137:web:4b90da4d5cae0c7cb33500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 