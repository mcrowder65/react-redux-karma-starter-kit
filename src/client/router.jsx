import React from "react";
import {
    BrowserRouter,
    browserHistory
} from "react-router-dom";
import {
    Route
} from "react-router";

import Home from "./components/home";

const Router = () => (
    <BrowserRouter history={browserHistory}>
        <div>
            <Route exact path="/" component={Home}/>
        </div>
    </BrowserRouter>

);


export default Router;
