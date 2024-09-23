import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAz_9XImW4K5sGSXEqF2y7h_MlfmS8ReCo",
  authDomain: "user-auth-app-d6a10.firebaseapp.com",
  projectId: "user-auth-app-d6a10",
  storageBucket: "user-auth-app-d6a10.appspot.com",
  messagingSenderId: "563945842164",
  appId: "1:563945842164:web:260febd55eb091d27505a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
