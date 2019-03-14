import { createSelector } from 'reselect';

const getUserInfo = state => state.userAuth;

export const isAuthenticated = createSelector(
  getUserInfo,
  user => user.isAuthenticated
)

export const isFetching = createSelector(
  getUserInfo,
  user => user.fetching
)