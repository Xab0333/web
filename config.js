alert("hola alerta");
import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBkMAUTul6xMJWskfA4LPSjjaxBhrjNgXM",
    authDomain: "festive-post-319011.firebaseapp.com",
    projectId: "festive-post-319011",
    storageBucket: "festive-post-319011.appspot.com",
    messagingSenderId: "1008310346429",
    appId: "1:1008310346429:web:46b988a0d62ae5e56e8dd4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
