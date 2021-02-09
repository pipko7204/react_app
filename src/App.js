import {useRouteMatch, Route, Switch, Redirect} from 'react-router-dom'
import cn from 'classnames'

import HomePage from "./routes/HomePage";
import GamePage from "./routes/GamePage/index";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

import s from './style.module.css'
import React from "react";
import AboutPage from "./routes/AboutPage";
import {FireBaseContext} from "./context/FireBaseContext";
import Firebase from "./servise/firebase";


const App = () => {
    const match = useRouteMatch('/')
    return (
            <FireBaseContext.Provider value={new Firebase()}>
            <Switch>
                <Route path='/404' render={() => (
                    <h1>404 Not Found</h1>
                )} />
                <Route>
                    <>
                        <MenuHeader bgActiv={!match.isExact}/>
                            <div className={cn(s.wrap, {
                                [s.isHomePage]: match.isExact
                            })}>
                                <Switch>
                                    <Route path='/' exact component={HomePage}/>
                                    <Route path='/home' component={HomePage}/>
                                    <Route path='/game' component={GamePage}/>
                                    <Route path='/about' component={AboutPage}/>
                                    <Route path='/contact' render={() => (
                                        <h1>Contact Page</h1>
                                    )} />
                                    <Route render={() => (
                                        <Redirect to='/404'/>
                                    )} />
                                </Switch>
                            </div>
                        <Footer/>
                    </>
                </Route>

            </Switch>
            </FireBaseContext.Provider>
    )

};

export default App;