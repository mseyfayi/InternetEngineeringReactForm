import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Form, Home} from "./components";

const App = () =>
    <Router>
        <Switch>
            <Route path="/form">
                <Form/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </Router>;

export default App;
