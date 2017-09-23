import {SET_USERNAME, SET_IS_DRAWER_OPEN} from "./action-types";

export const setUsername = username => {
    if (!username || username.length === 0 || typeof username !== "string") {
        throw Error("username must be non empty string");
    }
    const obj = {
        hello: "world"
    };
    return {
        type: SET_USERNAME,
        username,
        ...obj
    };
};

export const setIsDrawerOpen = isDrawerOpen => {
    return {
        type: SET_IS_DRAWER_OPEN,
        isDrawerOpen: !!isDrawerOpen
    };
};
