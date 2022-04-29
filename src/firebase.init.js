// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3s9RYP82HrIOrUkhV4YQqKsPImD-vPOA",
    authDomain: "warehouse-management-web-2c9f4.firebaseapp.com",
    projectId: "warehouse-management-web-2c9f4",
    storageBucket: "warehouse-management-web-2c9f4.appspot.com",
    messagingSenderId: "834519019882",
    appId: "1:834519019882:web:c334b56f01672ac1213513"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;