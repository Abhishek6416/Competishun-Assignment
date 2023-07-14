
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDz0hCPMiVQoGWDkFNlVYREzsZ-80eaYmY",
  authDomain: "compteh-4854a.firebaseapp.com",
  projectId: "compteh-4854a",
  storageBucket: "compteh-4854a.appspot.com",
  messagingSenderId: "828551194317",
  appId: "1:828551194317:web:6d50ef5ef94cb8295c6b84",
  measurementId: "G-CZ1KD0WRRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth=getAuth(app);

const provider= new GoogleAuthProvider();

export {auth,provider}