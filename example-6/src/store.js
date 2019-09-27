// / src / store.js
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import itemReducer from './reducers/itemReducer';

let middleware = applyMiddleware(createLogger());

export default createStore(itemReducer, middleware);
