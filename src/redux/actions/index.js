import { createActions } from 'redux-actions';

export const {
  registration: registrationActions,
  login: loginActions,
  googleLogin: googleLoginActions,
  logout: logoutActions,
  addBoard: addBoardActions,
  getBoards: getBoardsActions,
  getLists: getListsActions,
  addList: addListActions,
  getCards: getCardsActions,
  addCard: addCardActions
} = createActions({
  REGISTRATION: {
    PROCESSING: undefined,
    SUCCEED: undefined,
    FAILED: undefined
  },
  LOGIN: {
    PROCESSING: undefined,
    SUCCEED: undefined,
    FAILED: undefined
  },
  GOOGLE_LOGIN: {
    PROCESSING: undefined,
    SUCCEED: undefined,
    FAILED: undefined
  },
  LOGOUT: {
    PROCESSING: undefined,
    SUCCEED: undefined,
    FAILED: undefined
  },
  GET_BOARDS: {
    PROCESSING: undefined,
    SUCCEED: undefined,
    FAILED: undefined
  },
  ADD_BOARD: {
    PROCESSING: undefined,
    SUCCEED: undefined,
    FAILED: undefined
  },
  GET_LISTS: {
    PROCESSING: undefined,
    SUCCEED: undefined,
    FAILED: undefined
  },
  ADD_LIST: {
    PROCESSING: undefined,
    SUCCEED: undefined,
    FAILED: undefined
  },
  GET_CARDS: {
    PROCESSING: undefined,
    SUCCEED: undefined,
    FAILED: undefined
  },
  ADD_CARD: {
    PROCESSING: undefined,
    SUCCEED: undefined,
    FAILED: undefined
  },
})