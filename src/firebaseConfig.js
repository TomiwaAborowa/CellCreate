// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS713U2wpN7LwMhInW_Rz-QpHmJ7hT8L0",
  authDomain: "cellcreation-9b4c4.firebaseapp.com",
  databaseURL: "https://cellcreation-9b4c4-default-rtdb.firebaseio.com",
  projectId: "cellcreation-9b4c4",
  storageBucket: "cellcreation-9b4c4.appspot.com",
  messagingSenderId: "840934613159",
  appId: "1:840934613159:web:c7b6bb6023f0ed8e24fb82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };