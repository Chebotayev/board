import { createSelector } from 'reselect';

const getBoards = state => state.boards;

export const getAllBoards = createSelector(
  getBoards,
  boardsList => boardsList.boards
)