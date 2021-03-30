import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC0i_JUl1B2DRfMESSiI1oac1X7Yn3FNoM",
  authDomain: "discord-clone-7707d.firebaseapp.com",
  projectId: "discord-clone-7707d",
  storageBucket: "discord-clone-7707d.appspot.com",
  messagingSenderId: "748577955202",
  appId: "1:748577955202:web:d33ae750b9a5f9bba1439b",
  measurementId: "G-GF2WXP9MQE"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;