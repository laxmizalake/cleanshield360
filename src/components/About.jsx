import React from "react";
import "../styles/about.css";
import aboutImg from "../assets/about-building.jpg"; // replace with your image

export default function About() {
  return (
    <div className="about-page">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About CleanShield 360</h1>
          <p>
            A trusted facility & compliance management partner committed to 
            delivering clean, safe and reliable spaces for businesses, 
            residences and industries.
          </p>
        </div>
        <div className="hero-image">
          <img src={aboutImg} alt="About facility" />
        </div>
      </section>

      {/* ---------------- OUR MISSION ---------------- */}
      <section className="mission-section">
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>
            To redefine facility management with innovation, compliance,
            and operational excellence — ensuring every client experiences a 
            clean, safe and professional environment.
          </p>
        </div>
      </section>

      {/* ---------------- CORE VALUES ---------------- */}
      <section className="values-section">
        <h2 className="section-title">Our Values</h2>

        <div className="values-grid">

          <div className="value-card">
            <h3>Reliability</h3>
            <p>
              Consistent, dependable and timely support for all your facility needs.
            </p>
          </div>

          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              Adopting modern tools & smart systems to elevate operational efficiency.
            </p>
          </div>

          <div className="value-card">
            <h3>Compliance</h3>
            <p>
              Strict adherence to safety & regulatory standards across all services.
            </p>
          </div>

          <div className="value-card">
            <h3>Professionalism</h3>
            <p>
              Delivered by trained experts with a commitment to excellence.
            </p>
          </div>

        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="choose-section">
        <h2 className="section-title">Why Choose CleanShield 360?</h2>

        <div className="choose-grid">

          <div className="choose-card">
            <h3>Experienced Team</h3>
            <p>
              Skilled professionals with years of hands-on facility management expertise.
            </p>
          </div>

          <div className="choose-card">
            <h3>Comprehensive Services</h3>
            <p>
              From cleaning to compliance — all your needs under one umbrella.
            </p>
          </div>

          <div className="choose-card">
            <h3>Advanced Tools</h3>
            <p>
              High-quality equipment & technology for superior results.
            </p>
          </div>

          <div className="choose-card">
            <h3>Client-Centered Approach</h3>
            <p>
              Customized solutions designed around your business, schedule & safety.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
