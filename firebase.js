
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJToYF7FClYGDBmH75XVIXPcpyOHklAhg",
  authDomain: "dokkani-sz11.firebaseapp.com",
  projectId: "dokkani-sz11",
  storageBucket: "dokkani-sz11.firebasestorage.app",
  messagingSenderId: "786776105478",
  appId: "1:786776105478:web:2fe2f55f06de245cc45987",
  measurementId: "G-SRW1PY82F7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
