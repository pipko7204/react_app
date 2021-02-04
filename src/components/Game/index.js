import React from 'react';

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
        </>
    );
};

export default Game;