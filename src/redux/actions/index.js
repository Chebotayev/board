import {
  registration as registrationActions,
  login as loginActions,
  googleLogin as googleLoginActions,
  logout as logoutActions
} from './authActions';
import {
  addBoard as addBoardActions,
  getBoards as getBoardsActions,
  clearBoards as clearBoardsActions
} from './boardsActions';
import {
  getLists as getListsActions,
  addList as addListActions,
  clearLists as clearListsActions
} from './listsActions';
import {
  getCards as getCardsActions,
  addCard as addCardActions,
  clearCards as clearCardsActions
} from './cardsActions'



export {
  registrationActions,
  loginActions,
  googleLoginActions,
  logoutActions,
  addBoardActions,
  getBoardsActions,
  clearBoardsActions,
  getListsActions,
  addListActions,
  clearListsActions,
  getCardsActions,
  addCardActions,
  clearCardsActions
}