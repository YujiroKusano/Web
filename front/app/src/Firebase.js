import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = require("./Firebase.json");
firebase.initializeApp(firebaseConfig);

export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerFacebook = new firebase.auth.FacebookAuthProvider();
export const providerTwitter = new firebase.auth.TwitterAuthProvider();
export const db = firebase.firestore();
export default firebase;