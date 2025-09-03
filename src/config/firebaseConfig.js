// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyFeGaeeN2rxOZYvBfdpJpwxWfF3ShS6g",
  authDomain: "zebrano-7c49e.firebaseapp.com",
  projectId: "zebrano-7c49e",
  storageBucket: "zebrano-7c49e.firebasestorage.app",
  messagingSenderId: "568413211081",
  appId: "1:568413211081:web:eb79f1466d2d3ca7d44018",
  measurementId: "G-RTTETM10YX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const db = getFirestore(app);
              

export default firebaseConfig; 