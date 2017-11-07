import {SET_INPUT} from "./types";

export const setInput = input => {
    return {
        type: SET_INPUT,
        input
    };
};