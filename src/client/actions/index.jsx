import {SET_USERNAME, SET_IS_DRAWER_OPEN} from "./action-types";

export const setUsername = username => {
    if (!username || username.length === 0 || typeof username !== "string") {
        throw Error("username must be non empty string");
    }
    return {
        type: SET_USERNAME,
        username
    };
};

export const setIsDrawerOpen = isDrawerOpen => {
    return {
        type: SET_IS_DRAWER_OPEN,
        isDrawerOpen: !!isDrawerOpen
    };
};
