import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
import kalatexLogo from "../../../public/assets/kalatexLogo.png";
import { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

export const Navbar = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState("/");

  useEffect(() => {
    setIsActive(location.pathname);
  }, [location.pathname]);

  return (
    <nav>
      <NavLink to="/">
        <img src={kalatexLogo} alt="kala towels logo" />
      </NavLink>
      <div className="navElements">
        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => setIsActive("/")}
          className={isActive === "/" ? "active" : ""}
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/about"
          style={{ textDecoration: "none" }}
          onClick={() => setIsActive("/about")}
          className={isActive === "/about" ? "active" : ""}
        >
          <p>About</p>
        </NavLink>
        <NavLink
          to="/orderproducts"
          style={{ textDecoration: "none" }}
          onClick={() => setIsActive("/orderproducts")}
          className={isActive === "/orderproducts" ? "active" : ""}
        >
          <p>Order Products</p>
        </NavLink>
        <NavLink
          to="/contact"
          style={{ textDecoration: "none" }}
          onClick={() => setIsActive("/contact")}
          className={isActive === "/contact" ? "active" : ""}
        >
          <p>Contact Us</p>
        </NavLink>
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>
      </div>
      <div className="menu">
        <Dropdown />
      </div>
    </nav>
  );
};
