import { createApp } from 'vue'
import App from './App.vue'

import 'aos/dist/aos.css'

createApp(App).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7vILJmumr9U1BBuk9MaIkk_qtSZDP7SQ",
  authDomain: "vue-portfolio-10da8.firebaseapp.com",
  projectId: "vue-portfolio-10da8",
  storageBucket: "vue-portfolio-10da8.appspot.com",
  messagingSenderId: "966785476599",
  appId: "1:966785476599:web:0f163c83a44a2530e830f2",
  measurementId: "G-ZSHXHYJT60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
