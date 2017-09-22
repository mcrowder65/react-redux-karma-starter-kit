import {combineReducers} from "redux";

import {SET_USERNAME, SET_IS_DRAWER_OPEN} from "../actions/action-types";

const username = (store, action) => {
    if (action.type === SET_USERNAME) {
        return action.username;
    }
    return store || "";
};

const isDrawerOpen = (store, action) => {
    if (action.type === SET_IS_DRAWER_OPEN) {
        return action.isDrawerOpen;
    }
    return store || false;
};
export default combineReducers({
    username,
    isDrawerOpen
});
