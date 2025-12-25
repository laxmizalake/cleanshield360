import React from "react";
import "../styles/cleaning.css";
import {
  FaBroom,
  FaSprayCan,
  FaIndustry,
  FaPumpSoap,
  FaRecycle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ import navigate

export default function Cleaning() {
  const navigate = useNavigate(); // ✅ initialize navigate

  // ✅ Function to redirect to Contact page
  const handleBookNow = () => {
    navigate("/contact");
  };

  return (
    <div className="cleaning-container">

      {/* Hero Section */}
      <section className="cleaning-hero">
        <h1>Professional Cleaning Services</h1>
        <p>
          Delivering high-quality, reliable, and efficient cleaning solutions
          tailored for corporate offices, industries, and commercial spaces.
        </p>
      </section>

      {/* Service Categories */}
      <section className="service-section">
        <h2 className="section-title">Our Cleaning Categories</h2>

        <div className="service-grid">

          {/* Daily Office Cleaning */}
          <div className="service-card">
            <FaBroom className="service-icon" />
            <h3>Daily Office Cleaning</h3>
            <ul>
              <li>Workstation cleaning</li>
              <li>Dusting & surface wiping</li>
              <li>Washroom cleaning & restocking</li>
              <li>Pantry maintenance</li>
              <li>Garbage disposal</li>
            </ul>
            <button className="btn-service" onClick={handleBookNow}>
              Book Now
            </button>
          </div>

          {/* Deep Cleaning */}
          <div className="service-card">
            <FaPumpSoap className="service-icon" />
            <h3>Deep Cleaning</h3>
            <ul>
              <li>Corner, ceiling & window cleaning</li>
              <li>Floor & carpet scrubbing</li>
              <li>Furniture & AC vent cleaning</li>
              <li>Stain removal & shine restoration</li>
            </ul>
            <button className="btn-service" onClick={handleBookNow}>
              Book Now
            </button>
          </div>

          {/* Sanitization */}
          <div className="service-card">
            <FaSprayCan className="service-icon" />
            <h3>Sanitization & Disinfection</h3>
            <ul>
              <li>Hospital-grade disinfection</li>
              <li>Fogging & spraying services</li>
              <li>Virus & bacteria control</li>
              <li>Safe for all environments</li>
            </ul>
            <button className="btn-service" onClick={handleBookNow}>
              Book Now
            </button>
          </div>

          {/* Industrial Cleaning */}
          <div className="service-card">
            <FaIndustry className="service-icon" />
            <h3>Industrial Cleaning</h3>
            <ul>
              <li>Machinery cleaning</li>
              <li>Oil & grease removal</li>
              <li>Warehouse cleaning</li>
              <li>OSHA-compliant processes</li>
            </ul>
            <button className="btn-service" onClick={handleBookNow}>
              Book Now
            </button>
          </div>

          {/* Floor & Carpet Care */}
          <div className="service-card">
            <FaRecycle className="service-icon" />
            <h3>Floor & Carpet Care</h3>
            <ul>
              <li>Polishing & restoration</li>
              <li>Carpet shampooing</li>
              <li>Anti-slip treatment</li>
              <li>Stain removal</li>
            </ul>
            <button className="btn-service" onClick={handleBookNow}>
              Book Now
            </button>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="feature-section">
        <h2 className="section-title">Why Choose Our Cleaning Team?</h2>

        <div className="feature-grid">
          <div className="feature-card">Trained, verified cleaning staff</div>
          <div className="feature-card">Eco-friendly & premium equipment</div>
          <div className="feature-card">Emergency on-call cleaning</div>
          <div className="feature-card">Time-bound scheduled cleaning</div>
          <div className="feature-card">Trackable service reports</div>
          <div className="feature-card">Uniformed professionals with IDs</div>
        </div>
      </section>

    </div>
  );
}
