import { createSelector } from 'reselect';

const getBoards = state => state.boards;

export const getAllBoards = createSelector(
  getBoards,
  boards => boards
)