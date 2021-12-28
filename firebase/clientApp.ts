import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

 const firebase = initializeApp ({
  apiKey: "AIzaSyCdas73OyExJmkoPlxDvTuSsOGcBVePINk",
  authDomain: "yearone-coffeeapi.firebaseapp.com",
  databaseURL: "https://yearone-coffeeapi-default-rtdb.firebaseio.com",
  projectId: "yearone-coffeeapi",
  storageBucket: "yearone-coffeeapi.appspot.com",
  messagingSenderId: "215820621214",
  appId: "1:215820621214:web:56627d4eebb95bc061728f"
});

export const db = getFirestore();