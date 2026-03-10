import { NavLink } from "react-router";
import "../assets/css/Header.css"

const NavBar = () => {
  return (
    <nav>
      <NavLink className={`nav-elements`} to="/">
        Home
      </NavLink>
      <NavLink className={`nav-elements`} to="/topics">
        Topics
      </NavLink>
    </nav>
  );
};

export default NavBar;
