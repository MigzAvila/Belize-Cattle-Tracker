import { initializeApp } from "firebase/app";
import{getFirestore} from "@firebase/firestore";
import { APIService } from "../pages/components/APIcalls/apiCalls";

const apiService = new APIService();

console.log(apiService.getFirebaseKey());
const firebaseConfig = {
    apiKey: apiService.getFirebaseKey(),
    authDomain: "belize-cattle-tracker-eee6b.firebaseapp.com",
    projectId: "belize-cattle-tracker-eee6b",
    storageBucket: "belize-cattle-tracker-eee6b.appspot.com",
    messagingSenderId: "1034262289319",
    appId: "1:1034262289319:web:628f959a19cf3d82c63482",
    measurementId: "G-LY2HL9YBHR"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);