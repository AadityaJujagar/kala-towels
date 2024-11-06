import "./footer.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import KalatexLogo from "../../../public/assets/kalatexLogo.png";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="foot-col1">
          <img src={KalatexLogo} alt="kalatex logo footer" />
          <p>
            Delivering premium towels for every need, <br />
            crafted with care, designed for comfort.
          </p>
          <ul className="connect-social">
            <li>
              <a href="" target="_blank">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <XIcon />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <WhatsAppIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="foot-col2">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <NavLink
                style={{ textDecoration: "none", color: "#25282b" }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ textDecoration: "none", color: "#25282b" }}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ textDecoration: "none", color: "#25282b" }}
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ textDecoration: "none", color: "#25282b" }}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="foot-col3">
          <h2>Get in Touch</h2>
          <div className="get-inTouch">
            <LocationOnIcon />
            <p>
              <a href="">123 Main St, Anytown, USA 12345</a>
            </p>
          </div>
          <div className="get-inTouch">
            <PhoneInTalkIcon />
            <p>
              <a href="tel:555-555-5555">555-555-5555</a>
            </p>
          </div>
          <div className="get-inTouch">
            <MarkEmailReadIcon />
            <p>
              <a href="mailto:info@example.com">info@example.com</a>
            </p>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p> &copy; {currentYear} Kala Towels. All rights reserved.</p>
      </div>
    </>
  );
};
