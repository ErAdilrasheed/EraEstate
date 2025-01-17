// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-39d91.firebaseapp.com',
  projectId: 'mern-estate-39d91',
  storageBucket: 'mern-estate-39d91.appspot.com',
  messagingSenderId: '255263261115',
  appId: '1:255263261115:web:ff4dcd9b110a0ae1df449e',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
