import { useEffect, useContext } from "react";

import { ThemeContext } from "./components/ThemeToggle/context";
import { Navbar, Footer } from "./layout";
import { Intro, Services, Works, Testimonials, Contact } from "./container";

const App = () => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const getPerferColorScheme = () => {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark";
      }
      return "light";
    };

    const isUserPreferDark = getPerferColorScheme();
    if (isUserPreferDark) {
      theme.dispatch({ type: "DARK_THEME_ENABLED" });
    } else {
      theme.dispatch({ type: "LIGHT_THEME_ENABLED" });
    }
  }, []);

  return (
    <>
      <Navbar />
      <Intro />
      <Services />
      <Works />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
