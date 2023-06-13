import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFIlFaTbBLqLaqb5shSQLwLby7G0fYUAw",
  authDomain: "react-coder-543d5.firebaseapp.com",
  projectId: "react-coder-543d5",
  storageBucket: "react-coder-543d5.appspot.com",
  messagingSenderId: "807981284978",
  appId: "1:807981284978:web:e1f2de88635a32fe678ceb",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
