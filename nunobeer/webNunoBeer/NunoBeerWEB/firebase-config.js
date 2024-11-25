// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8e0Abkun6FmUse1JoGXyODZqrnoY5Bw8",
  authDomain: "minhacerveja-cecad.firebaseapp.com",
  projectId: "minhacerveja-cecad",
  storageBucket: "minhacerveja-cecad.appspot.com",
  messagingSenderId: "850020986246",
  appId: "1:850020986246:web:39a81ac938208c4e1cd007",
  measurementId: "G-FWZSWTGS9W"
};
export { firebaseConfig };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);