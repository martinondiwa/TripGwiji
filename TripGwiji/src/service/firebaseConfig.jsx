// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configurations
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-XF5D5vV8OmC8k5HUHdJzGofdCSPalCs",
  authDomain: "tripgwiji.firebaseapp.com",
  projectId: "tripgwiji",
  storageBucket: "tripgwiji.appspot.com",
  messagingSenderId: "204408330269",
  appId: "1:204408330269:web:45f9f0d7c1f095b14f4ef4",
  measurementId: "G-59QPXL2J7T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 

// const analytics = getAnalytics(app);
