import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVpIuS9WDFdhik65aWDNmDPv5VzduQWkc",
  authDomain: "mossoroexpress-31baf.firebaseapp.com",
  projectId: "mossoroexpress-31baf",
  storageBucket: "mossoroexpress-31baf.firebasestorage.app",
  messagingSenderId: "547378146531",
  appId: "1:547378146531:web:a1446c16b07f52768ea9d6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);