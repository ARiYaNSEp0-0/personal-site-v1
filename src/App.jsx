import { useEffect, useContext } from "react";
import { themeContext } from "./context";
import {
  Navbar,
  Intro,
  Services,
  Statistics,
  Works,
  Testimonials,
  Contact,
  Footer,
} from "./components";

import { getPreferColorScheme } from "./utils/getPreferColorScheme";

const App = () => {
  const theme = useContext(themeContext);

  useEffect(() => {
    const isUserPreferDark = getPreferColorScheme();
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
      <Statistics />
      <Works />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
