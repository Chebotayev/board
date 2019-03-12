import React from 'react';

//components
import CreateInstanceForm from '../../components/CreateInstanceForm';
import ListsList from '../../components/ListsList'


const ListsContainer = ({ id }) => (
  <div>
    <h1>Board id {id}</h1>
    <CreateInstanceForm id={id}/>
    <ListsList />
  </div>
);

export default ListsContainer;