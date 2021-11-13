import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-pYeYtYJXL8_GS2IqgrUj9CG2BwYBcyE",
  authDomain: "uber-next-d6247.firebaseapp.com",
  projectId: "uber-next-d6247",
  storageBucket: "uber-next-d6247.appspot.com",
  messagingSenderId: "54843590487",
  appId: "1:54843590487:web:95b3744f9d0f03d5a02012"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth   }