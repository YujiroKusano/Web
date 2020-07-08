import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

let dotenv = require('dotenv');
const result = dotenv.config();
console.log(result.parsed);

// var firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     databaseURL: process.env.DATABASE_URL,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appID: process.env.APP_ID,
//   };
var firebaseConfig = require("./Firebase.json");
firebase.initializeApp(firebaseConfig);
console.log(process.env.API_KEY);
export const db = firebase.firestore();
export default firebase;