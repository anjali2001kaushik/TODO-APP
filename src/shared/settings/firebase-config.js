// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWJWDYiIj0y5W51GPLEuoyZ-Z_hiNM4_I",
  authDomain: "todo-app-810ea.firebaseapp.com",
  projectId: "todo-app-810ea",
  storageBucket: "todo-app-810ea.appspot.com",
  messagingSenderId: "144287978201",
  appId: "1:144287978201:web:4df1e1e0b88eb7777a24c8",
  measurementId: "G-QJNTMXM7P8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const db = getFirestore(app);
