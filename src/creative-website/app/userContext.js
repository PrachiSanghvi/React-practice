import React, { createContext, useReducer } from "react";
export const UserContext = createContext();

// initial state
const initialState = { darkMode: false };

// reducer function
const themeReducer = (state, action) => {
  switch (action.type) {
    case "lightmode":
      return { darkMode: false };
    case "darkmode":
      return { darkMode: true };
    default:
      return state;
  }
}

// we need to pass this themeReducer function and the initialState to the useReducer hook.
export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return <UserContext.Provider value={{ state: state, dispatch: dispatch }}>{props.children}</UserContext.Provider>
}
