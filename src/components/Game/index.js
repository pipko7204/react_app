import React from 'react';
import PokemonCard from "../PokemonCard";
import {useState, useEffect} from 'react'
import s from './style.module.css'
import database from "../../servise/firebase";

const Game = () => {
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) =>{
            setPokemons(snapshot.val())
        })
    }, []);

    const handleChangeActiv = (id) => {
        setPokemons(prevState => {
            return Array.from(prevState, (item) => {
                if (item.id === id) {
                    item.active = true
                }
                return item
            })
        })
    }
    return (
        <>
            <h1>GAME PAGE</h1>
            <div className={s.flex}>
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
                        )
                    )
                }
            </div>
        </>
    );
};

export default Game;