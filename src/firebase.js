// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
//import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
//import { getAnalytics, logEvent } from 'firebase/analytics';

//const analytics = firebase.analytics();
//logEvent(analytics, 'notification_received');

const app = firebase.initializeApp({
  apiKey: "AIzaSyAsGmpH-3RIhaDpcWqtO_s0R9ES6tXL17E",
  authDomain: "tq-mvp.firebaseapp.com",
  projectId: "tq-mvp",
  storageBucket: "tq-mvp.appspot.com",
  messagingSenderId: "1038123056680",
  appId: "1:1038123056680:web:6857950fe8ca3ba35f7f1d",
  measurementId: "G-XGWCBTW0P0"
});

// Instantiate a Firebase app.
const fbauth = firebase.auth();

const fbdb = app.firestore();
const settings = { timestampsInSnapshots: true };
fbdb.settings(settings);

export function getEvents(collection) {
  return fbdb.collection(collection).get();
}

export default fbdb;
export { firebase, app, fbdb, fbauth };
