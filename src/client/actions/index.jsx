import { SET_USERNAME, SET_IS_DRAWER_OPEN } from './action-types';

export const setUsername = username => ({
  type: SET_USERNAME,
  username
});

export const setIsDrawerOpen = isDrawerOpen => ({
  type: SET_IS_DRAWER_OPEN,
  isDrawerOpen
});
