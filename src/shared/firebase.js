import "firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAb7LWohdTzMVbbAwXpFq1rpYTHwBerRiY",
  authDomain: "image-community-f81d9.firebaseapp.com",
  projectId: "image-community-f81d9",
  storageBucket: "image-community-f81d9.appspot.com",
  messagingSenderId: "182815480319",
  appId: "1:182815480319:web:6359642f803226ac95afca",
  measurementId: "G-YECZ1V8GBY",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, apiKey, firestore, storage };
