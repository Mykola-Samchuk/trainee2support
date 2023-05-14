import React from "react";
import "./footer.scss";
import logo from "./img/logo.png";
import { NavLink, Routes } from "react-router-dom";
import { ROUTES } from "../../router/router";

export default function Footer() {
  return (
    <footer>
      <div className="footer-up">
        <div className="footer-logo-wrapp">
          <NavLink to={ROUTES.about}>
            <img className="footer-logo" src={logo} alt="logo" />
          </NavLink>
        </div>
        <ul className="footer-link">
          <li >
            <NavLink to={ROUTES.first_line}>Перша лінія</NavLink>
          </li>
          <li >
            <NavLink to={ROUTES.second_line}>Друга лінія</NavLink>
          </li>
          <li >
            <NavLink to={ROUTES.third_line}>Третя лінія</NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-down">
        <p>created by 
          <NavLink to={ROUTES.git_created}>Mykola Samchuk</NavLink>
          </p>
      </div>
    </footer>
  );
}
