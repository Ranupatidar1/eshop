// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDt1GuK57cYLPoy_D0CWO7Fc2fbFMui48Q",
    authDomain: "eshop-ab705.firebaseapp.com",
    projectId: "eshop-ab705",
    storageBucket: "eshop-ab705.appspot.com",
    messagingSenderId: "176834401752",
    appId: "1:176834401752:web:474d5939184dfe50dbcead",
    measurementId: "G-2ZLG4Z241W"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db,auth};