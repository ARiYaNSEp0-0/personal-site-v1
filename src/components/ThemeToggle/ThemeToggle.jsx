import { useContext, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

import { ThemeContext } from "./context";
import { Button } from "../index";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const theme = useContext(ThemeContext);
  const isThemeDark = theme.state === "dark";

  const changeThemeToDark = () => {
    theme.dispatch({ type: "DARK_THEME_ENABLED" });
    document.documentElement.classList.add("dark");
  };

  const changeThemeToLight = () => {
    theme.dispatch({ type: "LIGHT_THEME_ENABLED" });
    document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    if (isThemeDark) {
      document.documentElement.classList.add("dark");
    }
  }, [isThemeDark]);

  return (
    <>
      {isThemeDark ? (
        <Button
          className={`theme-toggle theme-light`}
          onClick={changeThemeToLight}
        >
          <FiSun size={"1.5rem"} />
        </Button>
      ) : (
        <Button
          className={`theme-toggle theme-dark`}
          onClick={changeThemeToDark}
        >
          <FiMoon size={"1.5rem"} />
        </Button>
      )}
    </>
  );
};

export default ThemeToggle;
