// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCx4YNpFIorm8zqhVczNUWDGfj6bLRiswk",
    authDomain: "punguishop-51217.firebaseapp.com",
    projectId: "punguishop-51217",
    storageBucket: "punguishop-51217.appspot.com",
    messagingSenderId: "1082048387746",
    appId: "1:1082048387746:web:5a3b3797a50e70c231d5fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const initFirestore = () => {
    return app
}