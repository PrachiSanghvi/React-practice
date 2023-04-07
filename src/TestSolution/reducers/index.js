import { FetchEmployeeDetail } from "./EmployeeDataReducer";
import { DepartmentList } from "./DepartmentDetails";
import { combineReducers } from "redux";
const empReducer = combineReducers({ FetchEmployeeDetail ,DepartmentList})
export default empReducer;