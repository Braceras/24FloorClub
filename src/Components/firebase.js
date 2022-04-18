// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkECHmy0TiGSPgVRbSuqesNp90dANBXLc",
  authDomain: "floor-club.firebaseapp.com",
  projectId: "floor-club",
  storageBucket: "floor-club.appspot.com",
  messagingSenderId: "616447846000",
  appId: "1:616447846000:web:71443175b64cc39ba4f6b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)