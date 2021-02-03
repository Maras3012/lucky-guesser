import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyC1_fASGEaqO9kJuC-FdEfYxlHPkT3T9fY",
    authDomain: "lottery-project-cc665.firebaseapp.com",
    databaseURL: "https://lottery-project-cc665-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lottery-project-cc665",
    storageBucket: "lottery-project-cc665.appspot.com",
    messagingSenderId: 778068541789
    // appId: "1:778068541789:web:ab692e28f1ca8a48ac68b4",
    // measurementId: "G-GYWE3S9XJ2"
  /* apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID */
});

export default app;