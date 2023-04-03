// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVP-W-T8aFp-dyjafeRhDosdBe4-tM828",
  authDomain: "legostore-73698.firebaseapp.com",
  projectId: "legostore-73698",
  storageBucket: "legostore-73698.appspot.com",
  messagingSenderId: "498405743731",
  appId: "1:498405743731:web:aeddef013ac1c2bf8d5e06",
  measurementId: "G-QQG7GKSWHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {app}