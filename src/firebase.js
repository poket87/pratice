import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbdtcEJSWJ2r429kVfZ7r1x25aR76YMnQ",
  authDomain: "hanghae99-react-skilled.firebaseapp.com",
  projectId: "hanghae99-react-skilled",
  storageBucket: "hanghae99-react-skilled.appspot.com",
  messagingSenderId: "393204601887",
  appId: "1:393204601887:web:fa1d3a23b67744cb8fb12a",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
