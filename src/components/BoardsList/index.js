import React from 'react';

//components 
import Board from './Board';
// import Loader from '../Loader';

const BoardsList = ({ boards }) => (
  <>
    {boards.map(({ name, id }) => <Board key={id} id={id} name={name} />)}
  </>
);

export default BoardsList;