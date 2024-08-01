// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDkoqNestl2kVBW3tiaD2VgbppsXft7Bjk',
  authDomain: 'linkedin-9f67f.firebaseapp.com',
  projectId: 'linkedin-9f67f',
  storageBucket: 'linkedin-9f67f.appspot.com',
  messagingSenderId: '282660804620',
  appId: '1:282660804620:web:55d3eb99e32bc83ada3629',
  measurementId: 'G-RVKTXZN86T',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
