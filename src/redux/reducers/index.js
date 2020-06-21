import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import infoReducer from './infoReducer';


const rootReducer = combineReducers({
  users: usersReducer,
  info: infoReducer
});

export default rootReducer;
