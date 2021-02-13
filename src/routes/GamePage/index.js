import {useRouteMatch, Switch, Route} from 'react-router-dom'
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/finish";
import {PokemonContext} from "../../context/pookemonContext";
import {useState} from 'react'

const GamePage = () => {
    const [selectedPokemons, setSelectedPokemons] = useState({});
    const match = useRouteMatch();

    const handleSelectedPokemons = (key, pokemon) => {
        setSelectedPokemons(prevState =>{
            if (prevState[key]) {
                const copyState = {...prevState};
                delete copyState[key];

                return copyState;
            }
            return {
                ...prevState,
                [key]: pokemon
            }
        })
    }

    return (
        <PokemonContext.Provider value={{
            pokemon: selectedPokemons,
            onSelectedPokemons: handleSelectedPokemons
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage