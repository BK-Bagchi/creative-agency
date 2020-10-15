import React, { createContext, useEffect, useState } from 'react';
import Sign from '../Sign/Sign';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import DHome from '../Dashboard/DHome';

if (!JSON.parse(sessionStorage.getItem('loginInfo')))
    sessionStorage.setItem('loginInfo', JSON.stringify({}))
export const GlobalData = createContext()
const Main = () => {
    const [loginInfo, setLoginInfo] = useState({})
    if (loginInfo.isLoggedIn)
        sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo))

    const checkAdmin = (adminInfo) => {
        const checkAdmin = adminInfo.find(info => info.email === loginInfo.email)
        checkAdmin !== undefined ?
            sessionStorage.setItem('admin', JSON.stringify({ isAdmin: true })) :
            sessionStorage.setItem('admin', JSON.stringify({ isAdmin: false }))
    }

    useEffect(() => {
        fetch('http://localhost:4000/admin')
            .then(res => res.json())
            .then(data => checkAdmin(data))
    }, [loginInfo])
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
                    <Route path="/dashboard">
                        <DHome />
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