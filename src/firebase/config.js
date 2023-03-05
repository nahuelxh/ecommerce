// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCPNhqDrq1G9-HMXHyjKBtqz2h77vXVJqM",
  authDomain: "tocadiscos-33408.firebaseapp.com",
  projectId: "tocadiscos-33408",
  storageBucket: "tocadiscos-33408.appspot.com",
  messagingSenderId: "426432966422",
  appId: "1:426432966422:web:e62673f59739ba532b2a37"
};

const app = initializeApp(firebaseConfig);

export const initFirestore = () => {
    return app
}