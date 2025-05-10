import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDpK5VIRf3LKDWBpKMm18MQvfGKh-mtEzU",
  authDomain: "project-manager-c4443.firebaseapp.com",
  projectId: "project-manager-c4443",
  storageBucket: "project-manager-c4443.firebasestorage.app",
  messagingSenderId: "518953653159",
  appId: "1:518953653159:web:52c2efea7eb46bcf861c82",
  measurementId: "G-C9S94ZV2PV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);