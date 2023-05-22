import React, { useState } from "react";
import "./header.scss";
import logo from "./img/logo2.png";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../router/router";

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
  // handler click for for close mobile menu
  const handlerLinkClose = ()=>{
    setActive(!active)
  }

  return (
    <>
      <header className={`header-wrapp ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          <nav className="nav-wrapp">
            <div className="logo-wrapp">
              <NavLink to={ROUTES.about} >
                <img src={logo} alt="logo" />
              </NavLink>
            </div>
            <ul className={`nav-link-wrapp ${active ? "active" : ""}`}>
              <li className="link-wrapp">
                <NavLink to={ROUTES.first_line} onClick={handlerLinkClose}>Перша лінія</NavLink>
              </li>
              <li className="link-wrapp">
                <NavLink to={ROUTES.second_line} onClick={handlerLinkClose}>Друга лінія</NavLink>
              </li>
              <li className="link-wrapp">
                <NavLink to={ROUTES.third_line} onClick={handlerLinkClose}>Третя лінія</NavLink>
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
