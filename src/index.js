import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';

import RootReducer from './reducers/root_reducer';

// const createStoreWithMiddleware = applyMiddleware(MiddlewareGoesHere)(createStore);

// nothing in reducers yet, no need to apply the root reducer
const store = createStore(() => {});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container-fluid'));
