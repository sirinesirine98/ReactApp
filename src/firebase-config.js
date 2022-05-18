import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPfau-xVGVjirrJ5NVdiyysOV7QvMQuMs",
  authDomain: "reactwebapp-83db0.firebaseapp.com",
  projectId: "reactwebapp-83db0",
  storageBucket: "reactwebapp-83db0.appspot.com",
  messagingSenderId: "235624041592",
  appId: "1:235624041592:web:4493fa04b43381da27718d",
  measurementId: "G-8HMJ7R97CE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();