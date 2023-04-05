import { combineReducers } from "redux";
import { getUserDataReducer ,checkForLoggedInUser} from "./GetUserDataReducer";
import { getProductDataReducer } from "./ProductDataReducer";
import CartDataReducer from "./CartDataReducer";
const myReducer = combineReducers({getUserDataReducer,checkForLoggedInUser,getProductDataReducer,CartDataReducer})
export default myReducer;