import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "<ASK JAMES>",
    authDomain: "zaatariworkshop.firebaseapp.com",
    databaseURL: "https://zaatariworkshop.firebaseio.com",
    projectId: "zaatariworkshop",
    storageBucket: "zaatariworkshop.appspot.com",
    messagingSenderId: "315131011070",
    appId: "1:315131011070:web:64141c7db646ffe6a1eaaf",
    measurementId: "G-EFP45PWLSC"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
