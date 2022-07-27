import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

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

export {
  db
}