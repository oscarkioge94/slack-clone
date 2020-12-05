import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBlTXX2TDSy9dviWAUU4rMbF09Zv34vB2w",
    authDomain: "slack-clone-2aead.firebaseapp.com",
    databaseURL: "https://slack-clone-2aead-default-rtdb.firebaseio.com",
    projectId: "slack-clone-2aead",
    storageBucket: "slack-clone-2aead.appspot.com",
    messagingSenderId: "278176395540",
    appId: "1:278176395540:web:4765bb602a528d80eed201"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export{ auth, provider}
  export default db