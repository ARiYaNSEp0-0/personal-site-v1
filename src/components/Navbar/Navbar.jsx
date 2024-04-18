import { useEffect, useState } from "react";

import "./Navbar.css";

import {
  Logo,
  ThemeToggle,
  CallToAction,
  NavbarList,
  Button,
} from "../index.js";

import { CiMenuKebab } from "react-icons/ci";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // hide/unhide navigation-bar for touch screen devices (mobile, tablet, ...)
  const handleToggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflowY = isMobileNavOpen ? "hidden" : "visible";
  }, [isMobileNavOpen]);
  const pages = [
    { id: 1, path: "#home", text: "خانه" },
    { id: 2, path: "#services", text: "خدمات" },
    { id: 3, path: "#experience", text: "تجربه" },
    { id: 4, path: "#portfolio", text: "نمونه کار ها" },
    { id: 5, path: "#testimonial", text: "رضایت مشتری" },
  ];

  return (
    <nav className="navigation-bar">
      <div className="container container-lg ">
        <div className="navigation-bar__inner">
          <div className="navigation-bar__start">
            <Logo />
            <ThemeToggle />
          </div>
          <div className="navigation-bar__menu--desktop">
            <NavbarList list={pages} />
            <CallToAction href="#contact">مشاوره بگیر</CallToAction>
          </div>
          <div className="navigation-bar__menu--mobile">
            {!isMobileNavOpen ? (
              <Button
                className="navigation-bar__toggle--open flex-center"
                onClick={handleToggleMobileNav}
              >
                منو
                <CiMenuKebab />
              </Button>
            ) : (
              <Button
                className="navigation-bar__toggle--close flex-center"
                onClick={handleToggleMobileNav}
              >
                بستن
                <HiX />
              </Button>
            )}

            {isMobileNavOpen && (
              <div className="navigation-bar__dropdown">
                <div className="container">
                  <div className="navigation-bar__dropdown-inner flow-content--vertical">
                    <NavbarList list={pages} />
                    <CallToAction
                      href="#contact"
                      className="flow-content--large"
                    >
                      مشاوره بگیر
                    </CallToAction>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
