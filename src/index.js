import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import ReduxPromise from 'redux-promise'

import RootReducer from './reducers/root_reducer';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(RootReducer)}>
    <App />
  </Provider>
  , document.querySelector('.container-fluid'));
