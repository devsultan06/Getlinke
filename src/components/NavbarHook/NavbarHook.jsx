import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./NavbarHook.css";
import links from "../../data/link";
import open from "/image/open.png";
import close from "/image/close.png";

const NavbarHook = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "850px" });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";

    return (
      <ul className={listClassName}>
        {links.map((link) => (
          <li key={link.label}>
            <NavLink
              to={link.href}
              className="hover cursor-pointer block py-2 px-4 md:py-0 md:px-0"
              activeClassName="text-blue-600"
              onClick={closeMobileMenu}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        <li>
          <button
            to="/get-started"
            className="register 
        bg-gradient-to-r from-[#ff26b9] via-[#d434fe] to-[#903aff]
       text-white py-2.5 px-8 rounded cursor-pointer"
          >
            Get Started
          </button>
        </li>
      </ul>
    );
  };

  return (
    <header className="header px-[9%] pt-8 pb-1 flex-wrap border-b border-[#753386]">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo text-2xl font-semibold">
          get<span style={{ color: "#D434FE" }}>linked</span>
        </NavLink>

        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <img src={open} alt="" />
          </div>
        )}

        {isMobile ? (
          <div
            className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <img src={close} alt="" />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </header>
  );
};

export default NavbarHook;
