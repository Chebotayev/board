//@flow
import React from 'react';

//components 
import Board from './Board';

const BoardsList = ({ boards }) => (
  <>
    {boards.map(({ name, id }) => <Board key={id} id={id} name={name} />)}
  </>
);

export default BoardsList;