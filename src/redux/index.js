import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducer'
import { initState } from './initState';

const logger = createLogger({
  collapsed: true,
})

export const configStore = () => {
  const store =  createStore(reducer, initState, compose(
    applyMiddleware(...[logger]),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ));

  return store;
}