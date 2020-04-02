import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA5YDQPfebP407hT5IF6txTJwHnxhnQUvs",
  authDomain: "crw-db-43a8a.firebaseapp.com",
  databaseURL: "https://crw-db-43a8a.firebaseio.com",
  projectId: "crw-db-43a8a",
  storageBucket: "crw-db-43a8a.appspot.com",
  messagingSenderId: "424574611864",
  appId: "1:424574611864:web:dacc521a4ad41fc5937bed"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
