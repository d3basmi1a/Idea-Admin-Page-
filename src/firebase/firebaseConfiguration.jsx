// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMfqK1rEmQWTQE0GMP7UktzpRzrSxokOc", 
  authDomain: "startup-crafter-iic.firebaseapp.com",
  projectId: "startup-crafter-iic",
  storageBucket: "startup-crafter-iic.appspot.com",
  messagingSenderId: "890254421808",
  appId: "1:890254421808:web:ef2fb8b96f5da59c7b62f5",
  measurementId: "G-WXDESCNHYC"
};

// Initialize Firebase App
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Error initializing Firebase: ", error);
}

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Export Firestore utilities for convenience
export { collection, getDocs };
