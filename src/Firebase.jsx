// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKUk2xzXun-TDSv6REW-0cnPZB-Pkim6o",
  authDomain: "bloomandspicerestaurant.firebaseapp.com",
  projectId: "bloomandspicerestaurant",
  storageBucket: "bloomandspicerestaurant.appspot.com",
  messagingSenderId: "938044037152",
  appId: "1:938044037152:web:001b0078eea221987ac445",
  measurementId: "G-S98NCHWLTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage, analytics };