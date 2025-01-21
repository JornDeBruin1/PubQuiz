// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBV5iz00L-XgieUPg0-DVBvCCJhLP7UNno',
  authDomain: 'jajoquiz.firebaseapp.com',
  projectId: 'jajoquiz',
  storageBucket: 'jajoquiz.firebasestorage.app',
  messagingSenderId: '670546478148',
  appId: '1:670546478148:web:25e98924dad1bce897e811',
  measurementId: 'G-8S91CXBWG9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
