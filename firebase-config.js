import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, ref, set, get, onValue, query, orderByChild, limitToLast } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD8LN2wNlKvRD4gIJPvH5Niivnumqa2RU8",
  authDomain: "vitruvianaibot.firebaseapp.com",
  projectId: "vitruvianaibot",
  storageBucket: "vitruvianaibot.firebasestorage.app",
  messagingSenderId: "261013306864",
  appId: "1:261013306864:web:9d77ce0b0014188d63b135",
  measurementId: "G-HYXWK1WYSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, database, googleProvider, signInWithPopup, onAuthStateChanged, signOut, ref, set, get, onValue, query, orderByChild, limitToLast };
