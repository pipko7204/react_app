import {useRouteMatch, Route, Switch, Redirect} from 'react-router-dom'
import cn from 'classnames'

import HomePage from "./routes/HomePage";
import GamePage from "./routes/GamePage";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

import s from './style.module.css'
import React from "react";

const App = () => {
    const match = useRouteMatch('/')
    return (
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
                                    <Route path='/about' render={() => (
                                        <h1>This is page about</h1>
                                    )} />
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
    )

};

export default App;