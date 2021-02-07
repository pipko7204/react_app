import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBIn6x9KkHWUVhKUN2qDhzELMzT1fz0d5k",
    authDomain: "pokemon-game-9e6ac.firebaseapp.com",
    databaseURL: "https://pokemon-game-9e6ac-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-9e6ac",
    storageBucket: "pokemon-game-9e6ac.appspot.com",
    messagingSenderId: "261796360278",
    appId: "1:261796360278:web:cba21ca8bbc1633a5c4bf7"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database