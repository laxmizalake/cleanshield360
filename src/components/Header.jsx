import React, { useState } from "react";
import "../styles/header.css";
import logo from "../assets/1.jpg";
import { Link } from "react-router-dom";

export default function Header({ onLoginClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setLoginOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="brand">
          <img src={logo} className="logo-svg" alt="CleanShield logo" />
          <div className="brand-text">
            <h1>CleanShield360</h1>
            <p>Facility & Compliance Experts</p>
          </div>
        </div>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="nav desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {/* SERVICES DROPDOWN */}
          <div
            className="services-dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="services-link">Services</span>

            {servicesOpen && (
              <div className="dropdown-menu">
                <Link to="/cleaning" onClick={closeMenu}>
                  Cleaning
                </Link>

                <Link to="/maintenance" onClick={closeMenu}>
                  Maintenance
                </Link>

                <Link to="/hr" onClick={closeMenu}>
                  HR Solutions
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact">Contact</Link>

          {/* LOGIN DROPDOWN */}
          <div
            className="services-dropdown"
            onMouseEnter={() => setLoginOpen(true)}
            onMouseLeave={() => setLoginOpen(false)}
          >
            <button className="btn-login">Login</button>

            {loginOpen && (
              <div className="dropdown-menu">
                <span onClick={onLoginClick}>User Login</span>
                <span onClick={onLoginClick}>Admin Login</span>
              </div>
            )}
          </div>
        </nav>

        {/* ================= HAMBURGER ================= */}
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <span />
          <span />
          <span />
        </div>
      </header>

      {/* ================= BACKDROP ================= */}
      {menuOpen && <div className="menu-backdrop" onClick={closeMenu} />}

      {/* ================= MOBILE DRAWER ================= */}
      <aside className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <span>Menu</span>
          <button className="close-btn" onClick={closeMenu}>✕</button>
        </div>

        <nav className="drawer-nav">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>

          {/* MOBILE SERVICES */}
          <div className="drawer-services">
            <span onClick={() => setServicesOpen(!servicesOpen)}>
              Services
            </span>

            {servicesOpen && (
              <div className="drawer-submenu">
                <Link to="/cleaning" onClick={closeMenu}>
                  Cleaning
                </Link>

                <Link to="/maintenance" onClick={closeMenu}>
                  Maintenance
                </Link>

                <Link to="/hr" onClick={closeMenu}>
                  HR Solutions
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" onClick={closeMenu}>Contact</Link>

          {/* MOBILE LOGIN */}
          <div className="drawer-services">
            <span onClick={() => setLoginOpen(!loginOpen)}>
              Login
            </span>

            {loginOpen && (
              <div className="drawer-submenu">
                <span
                  onClick={() => {
                    closeMenu();
                    onLoginClick();
                  }}
                >
                  User Login
                </span>

                <span
                  onClick={() => {
                    closeMenu();
                    onLoginClick();
                  }}
                >
                  Admin Login
                </span>
              </div>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
}
