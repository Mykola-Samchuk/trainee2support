import React, { useState } from "react";
import "./header.scss";
import logo from "./img/logo2.png";

export default function Header() {
  // add active class for media query
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // add listener for header
  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else setScrolled(false);
  });

  return (
    <>
      <header className={`header-wrapp ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          <nav className="nav-wrapp">
            <div className="logo-wrapp">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <ul className={`nav-link-wrapp ${active ? "active" : ""}`}>
              <li className="link-wrapp">
                <a href="#">Перша лінія</a>
              </li>
              <li className="link-wrapp">
                <a href="#">Друга лінія</a>
              </li>
              <li className="link-wrapp">
                <a href="#">Третя лінія</a>
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
        </div>
      </header>
    </>
  );
}
