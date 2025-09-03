import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9QQ-mKiwrIeEnsF4r86m2j5FutWzEys0",
  authDomain: "prerender-v17.firebaseapp.com",
  projectId: "prerender-v17",
  storageBucket: "prerender-v17.firebasestorage.app",
  messagingSenderId: "262330649179",
  appId: "1:262330649179:web:7d40b5a307fd524179cd7e",
  measurementId: "G-209W3TDF4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
