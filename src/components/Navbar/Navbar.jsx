import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import links from "../../data/link";
import open from "/image/open.png";
import close from "/image/close.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 850) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo text-2xl font-semibold">
          get<span style={{ color: "#D434FE" }}>linked</span>
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {links.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.href}
                  className="hover first-letter:cursor-pointer block py-2 px-4 md:py-0 md:px-0"
                  activeClassName="text-blue-600"
                  onClick={closeMenuOnMobile}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="nav__item">
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
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <img src={open} alt="" />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <img src={close} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
