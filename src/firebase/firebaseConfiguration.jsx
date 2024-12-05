import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMfqK1rEmQWTQE0GMP7UktzpRzrSxokOc",
  authDomain: "startup-crafter-iic.firebaseapp.com",
  projectId: "startup-crafter-iic",
  storageBucket: "startup-crafter-iic.appspot.com",
  messagingSenderId: "890254421808",
  appId: "1:890254421808:web:ef2fb8b96f5da59c7b62f5",
  measurementId: "G-WXDESCNHYC",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
