import React from "react";
import "../styles/hero.css";
import shield from "../assets/shield-illustration.png";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="hero section">
      <div className="hero-left">
        <h2>Integrated<br/>Facility<br/>Solutions</h2>
        <p className="lead">Clean, safe and compliant spaces for work and home.</p>
        <a className="cta" href="#services">Learn More</a>
      </div>

      <div className="hero-right">
        <div className="shield-wrap">
          <img src={shield} alt="shield illustration" className="illustration" />
        </div>
      </div>
    </section>
  );
}
