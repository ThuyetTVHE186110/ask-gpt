// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBW3htvrHUvdB3FcPPUCKj0CAwXbyZsHog",
    authDomain: "ask-xai3dc10.firebaseapp.com",
    projectId: "ask-xai3dc10",
    storageBucket: "ask-xai3dc10.firebasestorage.app",
    messagingSenderId: "809763068265",
    appId: "1:809763068265:web:a163e5557db1cb45fac5f8",
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
