import { createSelector } from 'reselect';

const getLists = state => state.lists;

export const getAllLists = createSelector(
  getLists,
  listsList => listsList.lists
)

export const isFetching = createSelector(
  getLists,
  lists => lists.fetching
)