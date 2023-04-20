/* import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth"; */

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  // Add your Firebase config here
  apiKey: "AIzaSyAGGs7G_opq8TjQ_uSmnoojkTsy10cQ2gs",
  authDomain: "familyhealthvault.firebaseapp.com",
  projectId: "familyhealthvault",
  storageBucket: "familyhealthvault.appspot.com",
  messagingSenderId: "115473545421",
  appId: "1:115473545421:web:6437ad0d2641970b1fd184",
  measurementId: "G-WZ2MVNWM33"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();