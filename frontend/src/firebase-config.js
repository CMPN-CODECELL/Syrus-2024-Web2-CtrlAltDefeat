import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDotqVdJVAszOeBqzVNNTEEckzd4VrWgsk",
    authDomain: "mindfit-9952f.firebaseapp.com",
    projectId: "mindfit-9952f",
    storageBucket: "mindfit-9952f.appspot.com",
    messagingSenderId: "229962485394",
    appId: "1:229962485394:web:5f6c3138147a49fa95204b",
    measurementId: "G-BKEN3473XW"
};


// firebase.initializeApp(firebaseConfig);
export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;


