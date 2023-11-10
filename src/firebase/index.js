import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSqWsqAeAJWl9Ng8slt_h7Q80snauq74M",
  authDomain: "demoproject-6ee9c.firebaseapp.com",
  projectId: "demoproject-6ee9c",
  storageBucket: "demoproject-6ee9c.appspot.com",
  messagingSenderId: "162775803071",
  appId: "1:162775803071:web:7a511f5c72cc44bbfc520a",
  measurementId: "G-D9DMW3WS6J",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
