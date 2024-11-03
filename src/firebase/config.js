// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBu3vjhgQn_GwlPAeJUjw-Hpjfo9pymcjQ",
    authDomain: "ecommerce-60050-final.firebaseapp.com",
    projectId: "ecommerce-60050-final",
    storageBucket: "ecommerce-60050-final.firebasestorage.app",
    messagingSenderId: "576923050642",
    appId: "1:576923050642:web:9edc9978b11eb018953c4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
