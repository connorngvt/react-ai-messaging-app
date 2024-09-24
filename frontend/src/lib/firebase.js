import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-ai-messaging-app.firebaseapp.com",
  projectId: "react-ai-messaging-app",
  storageBucket: "react-ai-messaging-app.appspot.com",
  messagingSenderId: "407332537850",
  appId: "1:407332537850:web:db8d13b416ad62363bd043",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage();
