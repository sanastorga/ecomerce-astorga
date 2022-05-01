import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbfD_HtMLiowj8G_QbZrXSNXkN4Z10jLs",
  authDomain: "ecommercefunko-astorga.firebaseapp.com",
  projectId: "ecommercefunko-astorga",
  storageBucket: "ecommercefunko-astorga.appspot.com",
  messagingSenderId: "564101721721",
  appId: "1:564101721721:web:02adeb8ce6de43f1ac2ea8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);