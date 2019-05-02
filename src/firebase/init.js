import firebase from 'firebase'
import firestore from 'firebase/firestore'
var config = {
    apiKey: "AIzaSyCCyr3TDA9dD1shKdk4Oo1kzw7SlaysOmw",
    authDomain: "myproject-68537.firebaseapp.com",
    databaseURL: "https://myproject-68537.firebaseio.com",
    projectId: "myproject-68537",
    storageBucket: "myproject-68537.appspot.com",
    messagingSenderId: "300928421737"
  };
  const firebaseApp =  firebase.initializeApp(config);
  export default firebaseApp.firestore();