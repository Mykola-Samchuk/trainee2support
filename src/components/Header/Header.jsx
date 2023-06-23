import React, { useEffect, useState } from "react";
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
  const handlerLinkClose = () => {
    setActive(!active);
  };
  // const [active, setActive] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  // // handler click for open and close mobile menu
  // const handlerLinkClose = () => {
  //   setActive(!active);
  // };
  
  // // Stop scroll if mobile menu open
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 10;
  //     setScrolled(isScrolled);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (active) {
  //     document.documentElement.classList.add("scroll-locked");
  //     document.body.classList.add("scroll-locked");
  //   } else {
  //     document.documentElement.classList.remove("scroll-locked");
  //     document.body.classList.remove("scroll-locked");
  //   }
  // }, [active]);



  return (
    <>
      <header className={`header-wrapp ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          <nav className="nav-wrapp">
            <div className="logo-wrapp">
              <NavLink to={ROUTES.about}>
                <img src={logo} alt="logo" />
              </NavLink>
            </div>
            <ul className={`nav-link-wrapp ${active ? "active" : ""}`}>
              <li className="link-wrapp">
                <NavLink to={ROUTES.first_line} onClick={handlerLinkClose}>
                  Перша лінія
                </NavLink>
              </li>
              <li className="link-wrapp">
                <NavLink to={ROUTES.second_line} onClick={handlerLinkClose}>
                  Друга лінія
                </NavLink>
              </li>
              <li className="link-wrapp">
                <NavLink to={ROUTES.third_line} onClick={handlerLinkClose}>
                  Третя лінія
                </NavLink>
              </li>
            </ul>
          </nav>
          <NavLink className="office-wrapp" to="#">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9424 11.8261C16.4948 10.6382 17.5002 8.77221 17.5002 6.66675C17.5002 3.07712 14.5898 0.166748 11.0002 0.166748C7.41054 0.166748 4.50016 3.07712 4.50016 6.66675C4.50016 8.77221 5.5055 10.6382 7.05791 11.8261C3.33016 13.4544 0.708496 17.3186 0.708496 21.8334H21.2918C21.2918 17.3186 18.6702 13.4544 14.9424 11.8261ZM6.66683 6.66675C6.66683 4.27746 8.61087 2.33341 11.0002 2.33341C13.3895 2.33341 15.3335 4.27746 15.3335 6.66675C15.3335 9.05604 13.3895 11.0001 11.0002 11.0001C8.61087 11.0001 6.66683 9.05604 6.66683 6.66675ZM11.0002 13.1667C14.7794 13.1667 17.8961 16.3664 18.8001 20.1001H3.20015C4.10419 16.3664 7.22095 13.1667 11.0002 13.1667Z"
                fill="#292929"
              />
            </svg>
          </NavLink>
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
  // ----- Залишити для перевірки ----------
  // // add active class for media query
  // const [active, setActive] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  // // add listener for header
  // window.addEventListener("scroll", function () {
  //   if (window.scrollY > 10) {
  //     setScrolled(true);
  //   } else setScrolled(false);
  // });
  // // handler click for for close mobile menu
  // const handlerLinkClose = () => {
  //   setActive(!active);
  // };
  // -------------------------------------------