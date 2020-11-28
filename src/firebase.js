import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBiKNs06cYVTyswQxbh6150c6aEZVEW6tA',
  authDomain: 'instagram-clone-b0913.firebaseapp.com',
  databaseURL: 'https://instagram-clone-b0913.firebaseio.com',
  projectId: 'instagram-clone-b0913',
  storageBucket: 'instagram-clone-b0913.appspot.com',
  messagingSenderId: '767945940248',
  appId: '1:767945940248:web:6f4d1375b785111d28126d',
  measurementId: 'G-7GK87M65L0',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
