import React from "react";
import "./footer.scss";
import logo from "./img/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-up">
        <div className="footer-logo-wrapp">
          <a href="#">
            <img className="footer-logo" src={logo} alt="logo" />
          </a>
        </div>
        <ul className="footer-link">
          <li >
            <a href="#">Перша лінія</a>
          </li>
          <li >
            <a href="#">Друга лінія</a>
          </li>
          <li >
            <a href="#">Третя лінія</a>
          </li>
        </ul>
      </div>
      <div className="footer-down">
        <p>created by <a href="https://github.com/Mykola-Samchuk">Mykola Samchuk</a></p>
      </div>
    </footer>
  );
}
