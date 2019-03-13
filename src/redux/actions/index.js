import {
  registration as registrationActions,
  login as loginActions,
  googleLogin as googleLoginActions,
  logout as logoutActions
} from './authActions';
import {
  addBoard as addBoardActions,
  getBoards as getBoardsActions
} from './boardsActions';
import {
  getLists as getListsActions,
  addList as addListActions
} from './listsActions';
import {
  getCards as getCardsActions,
  addCard as addCardActions
} from './cardsActions'



export {
  registrationActions,
  loginActions,
  googleLoginActions,
  logoutActions,
  addBoardActions,
  getBoardsActions,
  getListsActions,
  addListActions,
  getCardsActions,
  addCardActions
}