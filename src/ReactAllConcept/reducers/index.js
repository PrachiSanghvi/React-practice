import { combineReducers } from "redux";
import { getUserDataReducer ,checkForLoggedInUser} from "./GetUserDataReducer";
import { getProductDataReducer } from "./ProductDataReducer";
const myReducer = combineReducers({getUserDataReducer,checkForLoggedInUser,getProductDataReducer})
export default myReducer;