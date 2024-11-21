import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8zfVlgzrE8LJJ0V2JokLemoFum45W_cg",
  authDomain: "chat-app-aef8d.firebaseapp.com",
  projectId: "chat-app-aef8d",
  storageBucket: "chat-app-aef8d.firebasestorage.app",
  messagingSenderId: "98745556513",
  appId: "1:98745556513:web:f8fdd79e6ff251c6e28d60",
  measurementId: "G-TP7RJX5TWL",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
