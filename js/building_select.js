//Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig =
{
    apiKey: "AIzaSyCwReoKDSMZgqVD1BvOb5aUQi3QJALE7hc",
    authDomain: "oit-kiosk.firebaseapp.com",
    projectId: "oit-kiosk",
    storageBucket: "oit-kiosk.appspot.com",
    messagingSenderId: "622074473491",
    appId: "1:622074473491:web:f3fb2717a8577b8ff963e6",
    measurementId: "G-BYNMKM80XC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const database = getDatabase(app);

// the hello world program
console.log('Hello World');