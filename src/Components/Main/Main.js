import React, { createContext, useState } from 'react';
import Sign from '../Sign/Sign';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

if (!JSON.parse(sessionStorage.getItem('loginInfo')))
    sessionStorage.setItem('loginInfo', JSON.stringify({}))
export const GlobalData = createContext()
const Main = () => {
    const [loginInfo, setLoginInfo] = useState({})
    if (loginInfo.isLoggedIn)
        sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo))

    return (
        <GlobalData.Provider value={{ login: [loginInfo, setLoginInfo] }}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/sign">
                        <Sign />
                    </Route>
                    <Route path='*'>
                        <Redirect push to='/' />
                    </Route>
                </Switch>
            </Router>
        </GlobalData.Provider>
    );
};

export default Main;