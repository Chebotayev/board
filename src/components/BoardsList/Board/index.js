import React from 'react';
import { Link } from 'react-router-dom';

const Board = ({id, name}) => (<Link to={`/boards/${id}`}>
  <div className='board'>
    <h3>{name}</h3>
  </div>
</Link>)

export default Board;