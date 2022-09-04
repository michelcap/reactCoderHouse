// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  // ORIGINAL
  // apiKey: "AIzaSyAtTucFTIIfR7JZg8i-5MOcf12mSNy0va0",
  // authDomain: "backendmichelcapurro.firebaseapp.com",
  // projectId: "backendmichelcapurro",
  // storageBucket: "backendmichelcapurro.appspot.com",
  // messagingSenderId: "825295285682",
  // appId: "1:825295285682:web:d90d40392484b76396c8ab"

  // SECUNDARIA 1
  // apiKey: "AIzaSyCZrQ4QHVrWq2DByecW1yBq3RrGPybpMRQ",
  // authDomain: "prueba-80b87.firebaseapp.com",
  // projectId: "prueba-80b87",
  // storageBucket: "prueba-80b87.appspot.com",
  // messagingSenderId: "352116822197",
  // appId: "1:352116822197:web:deed67b3ac2d963061eefc"

  // SECUNDARIA 2
  // apiKey: "AIzaSyAkcMRWJSyVxd8f2K8j5_m7Em5The0_ePc",
  // authDomain: "nnnn-5bcb0.firebaseapp.com",
  // projectId: "nnnn-5bcb0",
  // storageBucket: "nnnn-5bcb0.appspot.com",
  // messagingSenderId: "657650829229",
  // appId: "1:657650829229:web:f64f4f034eb116d5c1c324"

  // SUCUNDARIA 3
  apiKey: "AIzaSyBYxMSQFby-S2-7Tx6Ik6h7KCbjfiOsw3c",
  authDomain: "fir-a1bce.firebaseapp.com",
  projectId: "fir-a1bce",
  storageBucket: "fir-a1bce.appspot.com",
  messagingSenderId: "1014695952009",
  appId: "1:1014695952009:web:f5a9321c9a841748e51058"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);