import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ id, name }) => (<Link to={`/lists/${id}`}>
  <div className='board'>
    <h3>{name}</h3>
  </div>
</Link>)

export default List;