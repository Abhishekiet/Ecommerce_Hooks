// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpAfhOp4KR4CAQMDutjNjwVVntpMYjZ4g",
  authDomain: "reactproject-fc290.firebaseapp.com",
  projectId: "reactproject-fc290",
  storageBucket: "reactproject-fc290.appspot.com",
  messagingSenderId: "174169188986",
  appId: "1:174169188986:web:6f3387b8e82bee8857a9c3",
  measurementId: "G-SWNVJYFWVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);