import React from "react";
import "./header.scss"
import logo from "./img/logo2.png"

export default function Header() {
  return (
    <>
      <header className="header-wrapp">
        <nav className="nav-wrapp">
          <div className="logo-wrapp">
            <a href="#">
                <img src={logo} alt="logo"/>
                <p>Trainee 2 Support</p>
            </a>
          </div>
          <ul className="nav-link-wrapp">
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
      </header>
    </>
  );
}
