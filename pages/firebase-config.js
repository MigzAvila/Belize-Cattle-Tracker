// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "belize-cattle-tracker-eee6b.firebaseapp.com",
  projectId: "belize-cattle-tracker-eee6b",
  storageBucket: "belize-cattle-tracker-eee6b.appspot.com",
  messagingSenderId: "1034262289319",
  appId: "1:1034262289319:web:628f959a19cf3d82c63482",
  measurementId: "G-LY2HL9YBHR"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);