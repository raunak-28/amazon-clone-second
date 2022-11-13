import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFBVq0az5HzxS4n87_ilZBSwREoQO33HE",
  authDomain: "clone-fc0d5.firebaseapp.com",
  projectId: "clone-fc0d5",
  storageBucket: "clone-fc0d5.appspot.com",
  messagingSenderId: "77157879636",
  appId: "1:77157879636:web:5aa5df84e1c499d1b602c1",
  measurementId: "G-21BVD6GKJX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
