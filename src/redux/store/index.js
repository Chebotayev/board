import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import reducer from '../reducers/index';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
