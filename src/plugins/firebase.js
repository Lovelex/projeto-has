import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBmGi98X-wKGuPz05OoCZun7b9VgwaiNgk",
  authDomain: "has-teste.firebaseapp.com",
  databaseURL: "https://has-teste.firebaseio.com",
  projectId: "has-teste",
  storageBucket: "has-teste.appspot.com",
  messagingSenderId: "967451117633",
  appId: "1:967451117633:web:2e78c3cdea794c000c1ec0"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }