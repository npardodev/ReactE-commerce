import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDN-xqzD6G8EUBcpkSCU_weHgTodgiFtoQ",
    authDomain: "reacte-commerce.firebaseapp.com",
    projectId: "reacte-commerce",
    storageBucket: "reacte-commerce.appspot.com",
    messagingSenderId: "404950106447",
    appId: "1:404950106447:web:f2f3343235100ab5a0c53a"
};
const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();