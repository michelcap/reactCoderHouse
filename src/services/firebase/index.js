// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAtTucFTIIfR7JZg8i-5MOcf12mSNy0va0",
  // authDomain: "backendmichelcapurro.firebaseapp.com",
  // projectId: "backendmichelcapurro",
  // storageBucket: "backendmichelcapurro.appspot.com",
  // messagingSenderId: "825295285682",
  // appId: "1:825295285682:web:d90d40392484b76396c8ab"
  apiKey: "AIzaSyCZrQ4QHVrWq2DByecW1yBq3RrGPybpMRQ",
  authDomain: "prueba-80b87.firebaseapp.com",
  projectId: "prueba-80b87",
  storageBucket: "prueba-80b87.appspot.com",
  messagingSenderId: "352116822197",
  appId: "1:352116822197:web:deed67b3ac2d963061eefc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);