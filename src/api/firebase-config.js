import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvr5j94VfQRUCGl05gWSG4SoaFktzcjhA",
  authDomain: "diagnostdemo.firebaseapp.com",
  databaseURL: "https://diagnostdemo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "diagnostdemo",
  storageBucket: "diagnostdemo.appspot.com",
  messagingSenderId: "139429853213",
  appId: "1:139429853213:web:5cfae7c8480af121abaef4",
  measurementId: "G-M6MQCXTVQ9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
