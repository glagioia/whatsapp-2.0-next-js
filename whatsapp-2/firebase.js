import { initializeApp } from "firebase/app";
import{
  getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, query, where, orderBy, serverTimestamp, getDoc, updateDoc,
} from 'firebase/firestore';
import {
  getAuth
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAgnCFP3IxInBzco8bLkkmvl6Zh51hI6mQ",
    authDomain: "whatsapp-2-12d9d.firebaseapp.com",
    projectId: "whatsapp-2-12d9d",
    storageBucket: "whatsapp-2-12d9d.appspot.com",
    messagingSenderId: "502708863698",
    appId: "1:502708863698:web:a8f0eccf38f2b1f418230b"
  };

  
initializeApp(firebaseConfig) 
  

const  db = getFirestore(); 
const auth = getAuth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };