import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAo-cXupJrFAoOI1yR0skYy6LnEfH9tAV0",
  authDomain: "my-app-5de4f.firebaseapp.com",
  projectId: "my-app-5de4f",
  storageBucket: "my-app-5de4f.firebasestorage.app",
  messagingSenderId: "491864357662",
  appId: "1:491864357662:web:0127ce89db4097568ae70f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) 