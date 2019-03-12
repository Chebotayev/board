import React from 'react';
import BoardForm from '../BoardForm'
import BoardsList from '../BoardsList';


const Boards = ({ isAuth }) => {

  return isAuth && (<div>
    <BoardForm />
    <BoardsList />
  </div>)
}
export default Boards;