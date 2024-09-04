import hamburger from "../../public/image/open.png";
import links from "../data/link";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="text-7xl">
        get<span>linked</span>
      </h2>
      <nav>
        <ul>
          {links.map((link) => (
            <NavLink to={link.href} key={link.label}>
              <li>{link.label}</li>
            </NavLink>
          ))}
        </ul>
      </nav>

      <div className="hamburger">
        <img src={hamburger} alt="" />
      </div>
      <button className="register">Register</button>
    </div>
  );
};

export default Navbar;
