import { ADD_EMPLOYEE_DATA,EDIT_EMPLOYEE_DATA,DELETE_EMPLOYEE_DATA } from "../actions";

const initialState = { list: []
}

export const FetchEmployeeDetail = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE_DATA:
      const { eId ,firstName, lastName, salary, dob, department } = action.payload;
      return {
        ...state,
        list: [
          ...state.list, {
            eId : eId,
            firstName: firstName,
            lastName: lastName,
            salary: salary,
            dob: dob,
            department: department
          }
        ]
      }
    case EDIT_EMPLOYEE_DATA:
      return {
        ...state,
        list: [
          ...state.list, {
            firstName: firstName,
            lastName: lastName,
            salary: salary,
            dob: dob,
            department: department
          }
        ]
      }
    case DELETE_EMPLOYEE_DATA : 
      return {
        ...state,
        list: []
      }
    default:
      return state;
  }
}
