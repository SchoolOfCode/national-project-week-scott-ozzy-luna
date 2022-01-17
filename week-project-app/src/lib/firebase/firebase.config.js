import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyDnwRRNrLoSwagLr1Wj1Lit1jVpCrlo9Tg",
   authDomain: "school-of-code.firebaseapp.com",
   projectId: "school-of-code",
   storageBucket: "school-of-code.appspot.com",
   messagingSenderId: "837317304128",
   appId: "1:837317304128:web:268d668f6118f3f90964a5",
};

export const initializeFirebase = firebase.initializeApp(firebaseConfig);
