import { GET_MY_USERS_SUCCESS, SEARCHED_DATA } from "../actions/index";

export const getUserDataReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_MY_USERS_SUCCESS:
      return { ...state, users: action.users };
    case SEARCHED_DATA:
      return { ...state, searchedData: action.users };
    default:
      return state;
  }
}
