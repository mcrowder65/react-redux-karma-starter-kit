import React from "react";
import {
    BrowserRouter,
    browserHistory
} from "react-router-dom";
import {
    Route
} from "react-router";

import Login from "../login";
import Home from "../home";

const Router = () => (
    <BrowserRouter history={browserHistory}>
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
        </div>
    </BrowserRouter>

);


export default Router;
