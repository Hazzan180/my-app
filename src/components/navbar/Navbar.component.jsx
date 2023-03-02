import "./navbar.styles.css";
import { PlayIcon } from "../../svg/PlayIcon.svg";
import { HamburgerIcon } from "../../svg/Hamburger.svg";
import { NavLink, Outlet } from "react-router-dom";
import { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  let activeStyle = {
    color: "#5ebb3b",
  };

  return (
    <>
      <nav className="nav ">
        <NavLink to="/" className="link ">
          <p className="text-col-white">9jaStar</p>
        </NavLink>
        <div className="toggle-icon" onClick={toggleNav}>
          <HamburgerIcon />
        </div>
        {showNav && <NavDropDown handleClick={toggleNav} />}
        <div className="nav-item ">
          <ul className="fl fl-row wd-100">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="link"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore-music"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="link"
              >
                Expolore Music
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://docs.google.com/forms/d/e/1FAIpQLSfXvPi0c2XdZ5XgHmnji8xxJEiD9lBLaE3qIsbmH76HNWlilA/viewform"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="link"
              >
                Fan request
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://docs.google.com/forms/d/e/1FAIpQLScZOn5cgbAX6MPjvJTRCs1_CrVJzGReRHdb1PPqXUEMmof7ZA/viewform?usp=sf_link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="link"
              >
                Partner With us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="link"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/singup"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="link"
              >
               singup
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="outlet-container">
        <Outlet></Outlet>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  );
};
export const Header = ({ children }) => {
  return (
    <>
      <header className="header-container">{children}</header>
    </>
  );
};
export const Play = () => {
  return (
    <div className="logo">
      <p> listen now</p>
      <div className="svg-round">
        <PlayIcon />
      </div>
    </div>
  );
};

export const NavDropDown = ({ handleClick }) => {
  const navSlide = useRef();
  let activeStyle = {
    color: "#5ebb3b",
  };

  useLayoutEffect(() => {
    gsap.from(navSlide.current, {
      transition: "all 0.3s ease-out",
    });
  }, []);
  return (
    <div className="nav-dropdown" ref={navSlide}>
      <div className="nav-close-btn" onClick={handleClick}>
        &#x2715;
      </div>
      <ul className="fl fl-col">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore-music"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="link"
          >
            Expolore Music
          </NavLink>
        </li>
        <li>
          <NavLink
            to="https://docs.google.com/forms/d/e/1FAIpQLSfXvPi0c2XdZ5XgHmnji8xxJEiD9lBLaE3qIsbmH76HNWlilA/viewform"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="link"
          >
            Fan request
          </NavLink>
        </li>
        <li>
          <NavLink
            to="https://docs.google.com/forms/d/e/1FAIpQLScZOn5cgbAX6MPjvJTRCs1_CrVJzGReRHdb1PPqXUEMmof7ZA/viewform?usp=sf_link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="link"
          >
            Partner With us
          </NavLink>
        </li>
        <li>
              <NavLink
                to="/login"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="link"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/singup"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="link"
              >
               singup
              </NavLink>
            </li>
      </ul>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="footer-container">
      <ul className="footer-list">
        <li>9jaStar</li>
        <li>Explore Music</li>
        <li>community</li>
        <li>Partney with us</li>
        <li>Get support</li>
        <li>usefull links</li>
      </ul>
      <div>
        <ul className="footer-list">
          <li>instagram</li>
          <li> twitter</li>
          <li> facebook</li>
        </ul>
      </div>
    </footer>
  );
};
