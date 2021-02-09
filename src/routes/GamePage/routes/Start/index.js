import PokemonCard from "../../../../components/PokemonCard";
import {useState, useEffect, useContext} from 'react'
import {FireBaseContext} from '../../../../context/FireBaseContext'

import s from './style.module.css'

const DATA = {"id": 491}; //ругается иде, если ставить точки

const StartPage = () => {

    const firebase = useContext(FireBaseContext)
    const [pokemons, setPokemons] = useState({});
    console.log('###: firebase', firebase);


    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setPokemons(pokemons)
        })
    },[]);

    const handleChangeActiv = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id ) {
                    pokemon.active = !pokemon.active;
                }

                acc[item[0]] = pokemon;

                firebase.postPokemon(item[0], pokemon);

                return acc
            }, {})
        })
    }

    const handleAddPokemon = () => {
        const data = DATA;
        firebase.addPokemon(data)
    }


    return (
        <>
            <h1>GAME PAGE</h1>
            <div>
                <button onClick={handleAddPokemon}>
                    Add new pokemon
                </button>
            </div>
            <div className={s.flex}> // здесь почему-то ругается браузер TypeError: Cannot convert undefined or null to object
                {
                    Object.entries(pokemons).map(([key, {name, img, id, type, values, active}]) => (
                        <PokemonCard
                            key={key}
                            name={name}
                            img={img}
                            id={id}
                            type={type}
                            values={values}
                            isActive={active}
                            onClickCard={handleChangeActiv}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default StartPage;