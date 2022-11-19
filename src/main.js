import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8l8nhdTLQ3Kn5I3p4vHiAZtssoQwU1bc",
  authDomain: "dough-rise-54a3d.firebaseapp.com",
  projectId: "dough-rise-54a3d",
  storageBucket: "dough-rise-54a3d.appspot.com",
  messagingSenderId: "1039511695874",
  appId: "1:1039511695874:web:637bf36bf78c8967906d1b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App)

app.use(router)

app.mount('#app')


