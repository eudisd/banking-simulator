import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();

const enhancer = compose(
  applyMiddleware(thunk, logger),
  DevTools.instrument()
);

export default function configureStore(initialState) {
  let store;
  store = createStore(rootReducer, initialState, enhancer);
  return store;
}

