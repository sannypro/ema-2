// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUM4OJw6M6lZ7lFauAsZnC5VT-bUqWJ-Q",
    authDomain: "ema-john-simple-6e8f1.firebaseapp.com",
    projectId: "ema-john-simple-6e8f1",
    storageBucket: "ema-john-simple-6e8f1.appspot.com",
    messagingSenderId: "979295452586",
    appId: "1:979295452586:web:779c346a264ac7f7033fd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);