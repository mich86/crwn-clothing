import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];
//methods/values from middlewares are stored as individual values
const store = createStore(rootReducer, applyMiddleware(...middlewares));