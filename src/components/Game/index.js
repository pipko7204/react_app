import React from 'react';
import POKEMONS from "../../assets/POKEMONS";
import PokemonCard from "../PokemonCard";

const Game = ({onClickButton}) => {
    const handleClick = () => {
        onClickButton && onClickButton('app')
    }
    return (
        <>
            <h1>This is game Page</h1>
            <button onClick={handleClick}>
                Back
            </button>
            <div>
                {
                    POKEMONS.map((item) => <PokemonCard key={item.id} {...item}/>)
                }
            </div>
        </>
    );
};

export default Game;