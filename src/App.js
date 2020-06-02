import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {configureAxios} from "./global/actions";
import {Form, Home} from "./components";

const App = () => {
    useEffect(configureAxios, []);
    return (
        <Router>
            <Switch>
                <Route path="/form">
                    <Form/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
