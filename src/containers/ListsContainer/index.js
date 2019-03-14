import React, { useEffect } from 'react';
import { connect } from 'react-redux'

//components
import CreateInstanceForm from '../../components/CreateInstanceForm';
import ListsList from '../../components/ListsList';

import { addListActions, getListsActions, clearListsActions } from '../../redux/actions';

//selector
import { getAllLists, isFetching } from '../../redux/selectors/listsSelector'
import Loader from '../../components/Loader';


const ListsContainer = ({ match: { params: { id } }, addList, getLists, lists, fetching, clearLists }) => {
  
  useEffect(() => {
    getLists(id);
    return () => {
      clearLists();
    }
  }, []);

  return (
    <div>
      <h1>Board id {id}</h1>
      <CreateInstanceForm id={id} name='lists' handleSubmit={addList} />
      {fetching ? <Loader /> : <ListsList lists={lists}/>}
    </div>
  );
}

const mapStateToProps = state => ({
  lists: getAllLists(state),
  fetching: isFetching(state)
})

const mapDispatchToProps = {
  addList: addListActions.processing,
  getLists: getListsActions.processing,
  clearLists: clearListsActions.clear,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer);