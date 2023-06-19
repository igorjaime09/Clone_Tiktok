
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyASNBeFMPyUqzCw1ALsLgdl5DN4Mb2QQ4o",
  authDomain: "tiktok---jornada-920e4.firebaseapp.com",
  projectId: "tiktok---jornada-920e4",
  storageBucket: "tiktok---jornada-920e4.appspot.com",
  messagingSenderId: "638088330950",
  appId: "1:638088330950:web:752300b42bfa57fb8221c7",
  measurementId: "G-NS7ND0XCZJ"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;