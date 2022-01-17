import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
   apiKey: process.env.NEXT_LOCAL_API_KEY,
   authDomain: process.env.NEXT_LOCAL_AUTH_DOMAIN,
   projectId: process.env.NEXT_LOCAL_PROJECT_ID,
   storageBucket: process.env.NEXT_LOCAL_STORAGE_BUCKET,
   messagingSenderId: process.env.NEXT_LOCAL_MESSAGING_SENDER_ID,
   appId: process.env.NEXT_LOCAL_APP_ID,
};

export const initializeFirebase = firebase.initializeApp(firebaseConfig);
