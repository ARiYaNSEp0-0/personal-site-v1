import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialTheme = null;

const themeReducer = (state, action) => {
  switch (action.type) {
    case "DARK_THEME_ENABLED":
      return "dark";
    case "LIGHT_THEME_ENABLED":
      return "light";
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialTheme);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
