import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_CJYe7jrWSLkl7_5nRvtG3ZRbJHN2D7M",
  authDomain: "ricevuta-ada77.firebaseapp.com",
  projectId: "ricevuta-ada77",
  storageBucket: "ricevuta-ada77.appspot.com",
  messagingSenderId: "985742305547",
  appId: "1:985742305547:web:8579d9b64d738102411a0e",
  measurementId: "G-5Z26QM2Y27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app)
export const providerGoogle = new GoogleAuthProvider();

export function signup(email, password) {
    return  createUserWithEmailAndPassword(auth, email, password);
  }
  
  export function login(email, password) {
    return  signInWithEmailAndPassword(auth, email, password);
  }
  
  export function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }