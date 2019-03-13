import React, { useEffect } from 'react';
import { connect } from 'react-redux'

//components
import CreateInstanceForm from '../../components/CreateInstanceForm';
import ListsList from '../../components/ListsList';

import { addListActions, getListsActions } from '../../redux/actions';

//selector
import { getAllLists } from '../../redux/selectors/listsSelector'


const ListsContainer = ({ match: { params: { id } }, addList, getLists, lists }) => {
  
  useEffect(() => {
    getLists(id)
  }, []);

  return (
    <div>
      <h1>Board id {id}</h1>
      <CreateInstanceForm id={id} name='lists' handleSubmit={addList} />
      <ListsList lists={lists}/>
    </div>
  );
}

const mapStateToProps = state => ({
  lists: getAllLists(state)
})

const mapDispatchToProps = {
  addList: addListActions.processing,
  getLists: getListsActions.processing
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer);