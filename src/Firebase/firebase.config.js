// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvfU38JbSspjxh70Bvr2QU8EtNJspaaPc",
  authDomain: "american-news-papper-project.firebaseapp.com",
  projectId: "american-news-papper-project",
  storageBucket: "american-news-papper-project.appspot.com",
  messagingSenderId: "469126802422",
  appId: "1:469126802422:web:a71136270efe8869a7b5d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;