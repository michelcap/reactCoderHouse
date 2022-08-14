// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtTucFTIIfR7JZg8i-5MOcf12mSNy0va0",
  authDomain: "backendmichelcapurro.firebaseapp.com",
  projectId: "backendmichelcapurro",
  storageBucket: "backendmichelcapurro.appspot.com",
  messagingSenderId: "825295285682",
  appId: "1:825295285682:web:d90d40392484b76396c8ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)