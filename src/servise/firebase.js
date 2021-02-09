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



class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);

        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonSoket = (cb) => {
        this.database.ref('pokemon').on('value', (snapshot) => {
            cb(snapshot.val())
        })
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val())
    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon)
    }

    addPokemons = (data, cb) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/'+ newKey).set(data).then(() => cb())
    }
}

export default Firebase