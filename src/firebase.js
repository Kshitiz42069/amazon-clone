// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBzbCdh61nbB8BePGYaVYpp0-gagU5igOg",
  authDomain: "clone-85384.firebaseapp.com",
  projectId: "clone-85384",
  storageBucket: "clone-85384.appspot.com",
  messagingSenderId: "837308649483",
  appId: "1:837308649483:web:ab4279679ecfd25224370e",
  measurementId: "G-TWHZW9Y1SX"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export{db,auth};