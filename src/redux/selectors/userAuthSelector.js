import { createSelector } from 'reselect';

const getUserInfo = state => state.userAuth;

export const isAuthenticated = createSelector(
  getUserInfo,
  user => user.isAuthenticated
)