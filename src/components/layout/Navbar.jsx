import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="logo-text-main">
        <img className="logo" src="img/mitit_logo.png" alt="Логотип ВІТІ" />
        <div className="logo-text">
          <p>ВІЙСЬКОВИЙ ІНСТИТУТ</p>
          <p>ТЕЛЕКОМУНІКАЦІЙ ТА ІНФОРМАТИЗАЦІЇ</p>
          <p>ІМЕНІ ГЕРОЇВ КРУТ</p>
        </div>
      </div>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <nav>
        <ul className="nav__links">
          <li><a href="/">ІНСТИТУТ</a></li>
          <li><a href="/">ВСТУПНИКАМ</a></li>
          <li><a href="/">НАВЧАННЯ</a></li>
          <li><a href="/">КОНТАКТИ</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
