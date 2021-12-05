import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAF_oAs_BY1gGjG70igpkS2ZK0pX7sc86o",
  authDomain: "vaccine-27ca9.firebaseapp.com",
  projectId: "vaccine-27ca9",
  storageBucket: "vaccine-27ca9.appspot.com",
  messagingSenderId: "275034957321",
  appId: "1:275034957321:web:443c14d5f6aa625e2dfad8",
};
firebase.initializeApp(firebaseConfig);
let auth = firebase.auth();

export { firebase, auth };
