import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import "babel-polyfill";

import rootReducer from "./reducers/index";
import Router from "./router";
import initialState from "./reducers/initial-state";
import "./styles/base.css";
import "./styles/home.css";

/* eslint no-underscore-dangle: "off" */
/* global window */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState,
    composeEnhancers(applyMiddleware(thunk)));

const App = () => (
    <Provider store={store}>
        <Router/>
    </Provider>
);

/* global document */
ReactDOM.render(<App/>, document.getElementById("root"));
