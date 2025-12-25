import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import LowerServices from "../components/LowerServices";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import "../styles/global.css";
import "../styles/contactAction.css";

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="app">
      <Header onLoginClick={() => setLoginOpen(true)} />

      <main>
        <Hero />
        <Services />
        <LowerServices />
      </main>

      <Footer />
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />

      {/* Floating Contact / Call */}
      <div className="contact-action">
        <Link to="/contact" className="contact-btn">
          Contact Us
        </Link>

        <a href="tel:+918482877264" className="call-btn">
          <FaPhoneAlt />
        </a>
      </div>
    </div>
  );
}
