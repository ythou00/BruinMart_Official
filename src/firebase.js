// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAle8gvyUqhyIyBwdo_uA201v6aJ0pEXFs",
  authDomain: "bruinmart-s2506.firebaseapp.com",
  projectId: "bruinmart-s2506",
  storageBucket: "bruinmart-s2506.firebasestorage.app",
  messagingSenderId: "718011679046",
  appId: "1:718011679046:web:9e5f8e2027a8d1f2d06547",
  measurementId: "G-BW43X8EQYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

// Auth setup
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, analytics, auth, provider, db };