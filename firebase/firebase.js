import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyC6wJ0z8RARd_6V7yiBIw82j4OyLWSS8yA",
    authDomain: "react-native-firebase-aa660.firebaseapp.com",
    projectId: "react-native-firebase-aa660",
    storageBucket: "react-native-firebase-aa660.appspot.com",
    messagingSenderId: "132386342646",
    appId: "1:132386342646:web:d34c0ae13867a6828a4ed7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  export default{
      firebase,
      db,
  }
