import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAHwbbUW0RFVxMVU22vk7Kyy4EL1jcsMeU',
  authDomain: 'vue-notes-2a3d8.firebaseapp.com',
  projectId: 'vue-notes-2a3d8',
  storageBucket: 'vue-notes-2a3d8.appspot.com',
  messagingSenderId: '133340578106',
  appId: '1:133340578106:web:db5f3bc60d0887b5699003',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
  db
}