import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB45W7SZGgeG2ft0YSD_FWD_d2oGsIApzg",
  authDomain: "fire-auth-71996.firebaseapp.com",
  projectId: "fire-auth-71996",
  storageBucket: "fire-auth-71996.appspot.com",
  messagingSenderId: "649268866965",
  appId: "1:649268866965:web:f6c413a7925ff9749c109c",
  measurementId: "G-8ZDGNTM71J"
  };

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export { firebase };