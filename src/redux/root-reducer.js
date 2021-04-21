//this is the base reducer
//all the reducers will be here (broken up elsewhere)
import { combineReducers } from 'redux' ;

import userReducer from './user/user.reducer';

export default combineReducers({
   user: userReducer
})