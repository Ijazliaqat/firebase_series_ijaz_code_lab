import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1HM8QoxCIQBDdSL70dMYMLvxr0CA9Kzc",
    authDomain: "myfirstapp-e3c0d.firebaseapp.com",
    projectId: "myfirstapp-e3c0d",
    storageBucket: "myfirstapp-e3c0d.firebasestorage.app",
    messagingSenderId: "828223171152",
    appId: "1:828223171152:web:3371f56d97ee4517957f55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) 