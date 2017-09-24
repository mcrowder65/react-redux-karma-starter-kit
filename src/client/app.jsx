import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import rootReducer from "./reducers/index";
import Router from "./components/navigation/router";
import initialState from "./reducers/initial-state";
import "./styles/base.css";
import "./styles/home.css";

/* eslint no-underscore-dangle: "off" */
/* global window */
const store = createStore(rootReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => (
    <Provider store={store}>
        <Header>
            <Router/>
        </Header>
    </Provider>
);

/* global document */
ReactDOM.render(<App/>, document.getElementById("root"));
