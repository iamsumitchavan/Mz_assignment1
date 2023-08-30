import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbvR4sTCuFr_Tp07D2NXCqVq_FLvL38o0",
  authDomain: "auth-192a7.firebaseapp.com",
  projectId: "auth-192a7",
  storageBucket: "auth-192a7.appspot.com",
  messagingSenderId: "450068417340",
  appId: "1:450068417340:web:f5a4d8fbf238264d11ac39",
  measurementId: "G-0W0WQVJFFL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
