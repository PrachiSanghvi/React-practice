import { TodoReducer } from './Todoreducers';
import { getUserReducer } from './GetUserReducer';
import { combineReducers } from 'redux';
const reducer = combineReducers({ TodoReducer , getUserReducer})
export default reducer;