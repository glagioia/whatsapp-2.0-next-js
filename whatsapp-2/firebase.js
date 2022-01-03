import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAgnCFP3IxInBzco8bLkkmvl6Zh51hI6mQ",
    authDomain: "whatsapp-2-12d9d.firebaseapp.com",
    projectId: "whatsapp-2-12d9d",
    storageBucket: "whatsapp-2-12d9d.appspot.com",
    messagingSenderId: "502708863698",
    appId: "1:502708863698:web:a8f0eccf38f2b1f418230b"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  

const  db = app.firestore(); 
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };