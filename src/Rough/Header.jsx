import React, { useState } from "react";
import "../styles/header.css";
import logo from "../assets/1.jpg";
import { Link } from "react-router-dom";

export default function Header({ onLoginClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
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

        {/* Desktop Nav */}
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
                <Link to="/cleaning">Cleaning</Link>
                <Link to="/maintenance">Maintenance</Link>
                <Link to="/hr">HR & Statutory</Link>
              </div>
            )}
          </div>

          <Link to="/contact">Contact</Link>

          <button className="btn-login" onClick={onLoginClick}>
            Login
          </button>
        </nav>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <span />
          <span />
          <span />
        </div>
      </header>

      {/* BACKDROP */}
      {menuOpen && <div className="menu-backdrop" onClick={closeMenu} />}

      {/* SIDE DRAWER */}
      <aside className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <span>Menu</span>
          <button className="close-btn" onClick={closeMenu}>✕</button>
        </div>

        <nav className="drawer-nav">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>

          {/* MOBILE SERVICES DROPDOWN */}
          <div className="drawer-services">
            <span onClick={() => setServicesOpen(!servicesOpen)}>
              Services
            </span>

            {servicesOpen && (
              <div className="drawer-submenu">
                <Link to="/cleaning" onClick={closeMenu}>Cleaning</Link>
                <Link to="/maintenance" onClick={closeMenu}>Maintenance</Link>
                <Link to="/hr" onClick={closeMenu}>HR & Statutory</Link>
              </div>
            )}
          </div>

          <Link to="/contact" onClick={closeMenu}>Contact</Link>

          <button
            className="btn-login drawer-login"
            onClick={() => {
              closeMenu();
              onLoginClick();
            }}
          >
            Login
          </button>
        </nav>
      </aside>
    </>
  );
}
