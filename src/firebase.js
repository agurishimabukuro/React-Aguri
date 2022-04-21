// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjums1Lr-PU0TDKX_eAvLjVvso2dxssnk",
  authDomain: "coderhouse-ecommerce-aguri.firebaseapp.com",
  projectId: "coderhouse-ecommerce-aguri",
  storageBucket: "coderhouse-ecommerce-aguri.appspot.com",
  messagingSenderId: "49356174427",
  appId: "1:49356174427:web:90b993bd90d1de48e3fb7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db 