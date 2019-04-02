// @flow

import React from 'react';
import { Link } from 'react-router-dom';

// type Props = {
//   id: number,
//   name: string
// }

const Board = ({ id, name }) => (<Link className='boards-list--board-wrapper' to={`/boards/${id}`}>
  <div className='boards-list--board-wrapper--board'>
    <h3>{name}</h3>
  </div>
</Link>)

export default Board;