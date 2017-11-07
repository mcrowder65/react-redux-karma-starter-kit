import {combineReducers} from "redux";

import {SET_INPUT} from "../actions/types";
import initialState from "./initial-state";

const input = (state = initialState.input, action) => {
    if (action.type === SET_INPUT) {
        return action.input;
    }
    return state;
};
export default combineReducers({
    input
});
