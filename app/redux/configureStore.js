import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default function configureStore(preloadedState = {}) {
  return createStore(rootReducer(), preloadedState, enhancer);
}
