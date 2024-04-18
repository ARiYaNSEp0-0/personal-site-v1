import { createContext, useReducer } from "react";

const initialState = { mode: null };

export const themeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "DARK_THEME_ENABLED":
      return { ...state, mode: "dark" };
    case "LIGHT_THEME_ENABLED":
      return { ...state, mode: "light" };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {children}
    </themeContext.Provider>
  );
};
