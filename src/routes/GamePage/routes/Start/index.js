import PokemonCard from "../../../../components/PokemonCard";
import {useHistory} from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import {FireBaseContext} from '../../../../context/FireBaseContext'

import s from './style.module.css'
import {PokemonContext} from "../../../../context/pookemonContext";

const StartPage = () => {
    const firebase = useContext(FireBaseContext);
    const pokemonContext = useContext(PokemonContext);
    const history = useHistory();
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setPokemons(pokemons)
        })

        return () => firebase.offPokemonSoket()
    },[]);

    const handleChangeSelected= (key) => {
        const pokemon = {...pokemons[key]}
        pokemonContext.onSelectedPokemons(key, pokemon)

        setPokemons(prevState => ({
            ...prevState,
            [key] : {
                ...prevState[key],
                selected: !prevState[key].selected,
            }
        }))
    }

    const handleStartGameClick = () => {
        history.push('game/board')
    }

    return (
        <>

            <div className={s.buttonWrap}>
                <button
                    onClick={handleStartGameClick}
                    disabled={Object.keys(pokemonContext.pokemon).length < 5}
                >
                    Start Game
                </button>
            </div>
            <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, {name, img, id, type, values, selected}]) => (
                        <PokemonCard
                            className={s.card}
                            key={key}
                            name={name}
                            img={img}
                            id={id}
                            type={type}
                            values={values}
                            isActive={true}
                            isSelected={selected}
                            onClickCard={() => {
                                if (Object.keys(pokemonContext.pokemon).length < 5 || selected) {
                                    handleChangeSelected(key)
                                }
                            }}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default StartPage;