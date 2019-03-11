import React from 'react';
import BoardForm from '../BoardForm'
import Boards from '../Boards';


const BoardsList = ({ isAuth }) => {

  return isAuth && (<div>
    <BoardForm />
    <Boards />
  </div>)
}
export default BoardsList;