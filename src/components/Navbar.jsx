import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./Navbar.css";
import ExOpLogo from "../assets/ExOpLogo.png";

const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <nav className="nav">
        <div className="nav__burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <img src={ExOpLogo} alt="Logo" className="nav__logo" />
      </nav>

      <div className={menu_class}>
        <ul className="nav__menu-links">
          <li className="nav__list-item">
            <Link to="/" className="nav__menu-link" onClick={updateMenu}>
              Home
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/aboutus" className="nav__menu-link" onClick={updateMenu}>
              About Us
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/prices" className="nav__menu-link" onClick={updateMenu}>
              Pricing
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/reviews" className="nav__menu-link" onClick={updateMenu}>
              Customer Reviews
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
