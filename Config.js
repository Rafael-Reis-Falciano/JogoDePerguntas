import firebase from 'firebase';

const firebaseConfig = {

  apiKey: "AIzaSyDbrkBlwZFz_AIBSB00b5lShJoQl3nSAKU",

  authDomain: "jogo-de-perguntas-1f2a9.firebaseapp.com",

  databaseURL: "https://jogo-de-perguntas-1f2a9-default-rtdb.firebaseio.com",

  projectId: "jogo-de-perguntas-1f2a9",

  storageBucket: "jogo-de-perguntas-1f2a9.appspot.com",

  messagingSenderId: "499837658723",

  appId: "1:499837658723:web:0af7895a02b2caccf3ba56",

  measurementId: "G-0N65YE1RXB"

};

if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig);
}

export default firebase.database();


