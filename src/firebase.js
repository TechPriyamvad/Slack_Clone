import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQckfIQ63qUjcoK1fjxrPJOamQ1_X5Gow",
  authDomain: "slack-60c0a.firebaseapp.com",
  projectId: "slack-60c0a",
  storageBucket: "slack-60c0a.appspot.com",
  messagingSenderId: "197187343794",
  appId: "1:197187343794:web:dc1f99d61fc12bca5cc0ab"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
