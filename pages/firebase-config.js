import { initializeApp } from "firebase/app";
import{getFirestore} from "@firebase/firestore";

const apiService = require("./components/APIcalls/APIService");

const firebaseConfig = {
  apiKey: apiService.getFirebaseKey(),
  authDomain: "bzcattletrackerv1.firebaseapp.com",
  projectId: "bzcattletrackerv1",
  storageBucket: "bzcattletrackerv1.appspot.com",
  messagingSenderId: "18068686476",
  appId: "1:18068686476:web:0022e03a418b391ede1da9",
  measurementId: "G-SDDBK8B953"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);