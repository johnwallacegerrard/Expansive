import "./Footer.css";
import { BrowserRouter, Link } from "react-router-dom";
import phoneIcon from "../assets/telephone.png";
import emailIcon from "../assets/arroba.png";
import fbIcon from "../assets/facebook.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__contact-column">
        <p className="footer__contact-title">Contact Us</p>
        <ul className="footer__contacts">
          <li className="footer__contact-container">
            <img
              src={phoneIcon}
              alt="phone_icon"
              className="footer__contact-image"
            />
            <p className="footer__contact">607-481-9559</p>
          </li>
          <li className="footer__contact-container">
            <img
              src={emailIcon}
              alt="email_icon"
              className="footer__contact-image"
            />
            <p className="footer__contact">expansiveoperations@gmail.com</p>
          </li>
          <li className="footer__contact-container">
            <img
              src={fbIcon}
              alt="phone_icon"
              className="footer__contact-image"
            />
            <a
              href="https://www.facebook.com/allaah.sessions"
              className="footer__contact"
            >
              /allaah.sessions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
