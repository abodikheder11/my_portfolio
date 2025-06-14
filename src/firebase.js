// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Direct Firebase config (fine for dev)
const firebaseConfig = {
  apiKey: "AIzaSyDrwrj-7ZOuDA8H0DU4loNIZEH-8T00hLs",
  authDomain: "portfolio-a0b8f.firebaseapp.com",
  projectId: "portfolio-a0b8f",
  storageBucket: "portfolio-a0b8f.firebasestorage.app",
  messagingSenderId: "729852217338",
  appId: "1:729852217338:web:cc0466d51b96eccde74643",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };
