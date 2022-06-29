import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDrF2QSfdwwfed6uL3NjWL6tNG8aFkfjdU",
    authDomain: "invoice-85d06.firebaseapp.com",
    projectId: "invoice-85d06",
    storageBucket: "invoice-85d06.appspot.com",
    messagingSenderId: "537936568809",
    appId: "1:537936568809:web:6f1b609d0a97219e7b6b78"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();