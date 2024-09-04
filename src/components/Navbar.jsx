import { Link } from "react-router-dom";
import hamburger from "../../public/image/open.png";
import links from "../data/link";
const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="text-7xl">
        get<span>linked</span>
      </h2>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <Link to={link.href}>{link.label}</Link>
            </li>
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
