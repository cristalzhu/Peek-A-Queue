// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKVu77XGy_OpONNziphL09B2iqpH_ka4k",
  authDomain: "peekaqueue.firebaseapp.com",
  projectId: "peekaqueue",
  storageBucket: "peekaqueue.appspot.com",
  messagingSenderId: "1064527633491",
  appId: "1:1064527633491:web:985c32ec074fb1364ffaa6",
  measurementId: "G-1SLMMB4P20"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(app); //tentative, or initialize this in node server