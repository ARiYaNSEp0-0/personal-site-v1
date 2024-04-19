import { useState } from "react";

import "./Navbar.css";

import NavbarList from "./NavbarList";
import { Logo, ThemeToggle, CallToAction, Button } from "../../components";

import { CiMenuKebab } from "react-icons/ci";
import { HiX } from "react-icons/hi";

// primary navigation at start.
const Navbar = () => {
  // for controlling mobile navigation menu open/close state
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // for pages in navigation-bar menu
  const pages = [
    { id: 1, path: "#home", text: "خانه" },
    { id: 2, path: "#services", text: "خدمات" },
    { id: 4, path: "#portfolio", text: "نمونه کار ها" },
    { id: 5, path: "#testimonials", text: "رضایت مشتری" },
  ];

  // close mobile nav
  const closeMobileNav = () => {
    document.body.style.overflowY = "visible";
    setIsMobileNavOpen(false);
  };

  // open mobile nav
  const openMobileNav = () => {
    document.body.style.overflowY = "hidden";
    setIsMobileNavOpen(true);
  };

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
                onClick={openMobileNav}
              >
                منو
                <CiMenuKebab />
              </Button>
            ) : (
              <Button
                className="navigation-bar__toggle--close flex-center"
                onClick={closeMobileNav}
              >
                بستن
                <HiX />
              </Button>
            )}

            {isMobileNavOpen && (
              <div className="navigation-bar__dropdown">
                <div className="container">
                  <div className="navigation-bar__dropdown-inner flow-content--vertical">
                    <NavbarList list={pages} onClick={closeMobileNav} />
                    <CallToAction
                      href="#contact"
                      className="flow-content--large"
                      onClick={closeMobileNav}
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
