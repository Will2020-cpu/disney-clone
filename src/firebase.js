import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAbt4G8tpgg74yKde41Zgxh2lAifO4mFok",
    authDomain: "testing-b1a51.firebaseapp.com",
    databaseURL: "https://testing-b1a51.firebaseio.com",
    projectId: "testing-b1a51",
    storageBucket: "testing-b1a51.appspot.com",
    messagingSenderId: "529633652765",
    appId: "1:529633652765:web:bddb7f381670c4d6d756f4",
    measurementId: "G-FTKP3RCP9M"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage }

export default db;

