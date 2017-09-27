import React from "react";
import {createStore} from "redux";
import {mount} from "enzyme";
import {Provider} from "react-redux";

import rootReducer from "../../../src/client/reducers/";
import initialState from "../../../src/client/reducers/initial-state";
import Login from "../../../src/client/components/login";

describe("src/client/components/login/index.spec.jsx", () => {
    let container;
    let store;
    let login;
    beforeEach(() => {
        store = createStore(rootReducer, initialState);
        container = mount(
            <Provider store={store}>
                <Login/>
            </Provider>);
        login = container.find("Login");
    });
    const id = "username-click";
    it(`clicking #${id} should fire some actions`, () => {
        login.find(`#${id}`).simulate("click");
        expect(login.prop("username")).eql("hello");
    });
});