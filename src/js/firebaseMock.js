import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: '<Your apiKey>',
  authDomain: '<Your authDomain>',
  projectId: '<Your projectId>',
  storageBucket: '<Your storageBucket>',
  messagingSenderId: '<Your messagingSenderId>',
  appId: '<Your appId>',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {
  db,
  auth
}