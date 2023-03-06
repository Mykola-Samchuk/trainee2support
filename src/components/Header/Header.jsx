import React, { useState } from "react";
import "./header.scss";
import logo from "./img/logo.png";

export default function Header() {
  // add active class for media query
  const [active, setActive] = useState(false);

  return (
    <>
      <header className="header-wrapp">
        <nav className="nav-wrapp">
          <div className="logo-wrapp">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <ul className={`nav-link-wrapp ${active ? "active" : ""}`}>
            <li className="link-wrapp">
              <a href="#">First Line</a>
            </li>
            <li className="link-wrapp">
              <a href="#">Second Line</a>
            </li>
            <li className="link-wrapp">
              <a href="#">Third Line</a>
            </li>
          </ul>
        </nav>
        <div
          className={`mobile-btn ${active ? "active" : ""}`}
          onClick={() => {
            setActive(!active);
          }}
        >
          <span></span>
        </div>
      </header>
    </>
  );
}
