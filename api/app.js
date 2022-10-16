import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_Hfp2y5H9nnuapdXMQYh2ZSP1HHa21j0",
    authDomain: "livecampus-c87e8.firebaseapp.com",
    databaseURL: "https://livecampus-c87e8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "livecampus-c87e8",
    storageBucket: "livecampus-c87e8.appspot.com",
    messagingSenderId: "902860483415",
    appId: "1:902860483415:web:7c5b8f930800727c7e2c12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);