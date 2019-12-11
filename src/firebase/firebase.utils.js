import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDjIVDuWbgfg-x6GVC1suediVTxW2Hknvc",
    authDomain: "online-store-react.firebaseapp.com",
    databaseURL: "https://online-store-react.firebaseio.com",
    projectId: "online-store-react",
    storageBucket: "online-store-react.appspot.com",
    messagingSenderId: "404922478564",
    appId: "1:404922478564:web:e491ec5d9357c0fe59a1f1",
    measurementId: "G-TK0NP5TFT6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
