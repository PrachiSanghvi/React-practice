import { combineReducers } from "redux";
import { getUserDataReducer } from "./GetUserDataReducer";
const myReducer = combineReducers({getUserDataReducer})
export default myReducer;