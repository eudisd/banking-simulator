import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';

const enhancer = compose(
  applyMiddleware(thunk)
);

export default function configureStore(initialState) {
  let store;
  store = createStore(rootReducer, initialState, enhancer);
  return store;
}

