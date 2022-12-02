// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs-aL0PbueeqGLzf5nRz_Q-whOAQLxaDE",
  authDomain: "bembosapp-7fd41.firebaseapp.com",
  projectId: "bembosapp-7fd41",
  storageBucket: "bembosapp-7fd41.appspot.com",
  messagingSenderId: "38912841533",
  appId: "1:38912841533:web:8ed1fea6e1cd069e64d754"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export { firebase, getFirestore }