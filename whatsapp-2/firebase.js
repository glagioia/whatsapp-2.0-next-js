// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgnCFP3IxInBzco8bLkkmvl6Zh51hI6mQ",
  authDomain: "whatsapp-2-12d9d.firebaseapp.com",
  projectId: "whatsapp-2-12d9d",
  storageBucket: "whatsapp-2-12d9d.appspot.com",
  messagingSenderId: "502708863698",
  appId: "1:502708863698:web:a8f0eccf38f2b1f418230b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
