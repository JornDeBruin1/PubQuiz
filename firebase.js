import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyD-2n4CswlYgFxs-iwLEaoAWCxgwZkvnnA",
  authDomain: "pubquiz-avond.firebaseapp.com",
  projectId: "pubquiz-avond",
  storageBucket: "pubquiz-avond.appspot.com",
  messagingSenderId: "488071039827",
  appId: "1:488071039827:web:304856bd9b9ba138faafa6",
  measurementId: "G-GBMCB139YG"
};

// Initialize Firebase
const firebaseApp = firebaseApp.initializeApp(config);
const analytics = analytics.getAnalytics(app);