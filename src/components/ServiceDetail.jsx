import React from "react";
import "../styles/servicedetail.css";
import { Link } from "react-router-dom";
import { FaBroom, FaUserTie, FaTools } from "react-icons/fa";

export default function ServiceDetail() {
  return (
    <section className="service-detail-wrapper">

      {/* PAGE TITLE */}
      <div className="service-detail-header">
        <h2>Our Services</h2>
        <p>
          CleanShield360 provides comprehensive facility solutions crafted with 
          precision, compliance, and professional expertise.
        </p>
      </div>

      {/* THREE MAIN SERVICE CARDS */}
      <div className="service-detail-grid">

        {/* CLEANING */}
        <div className="sd-card">
          <div className="sd-icon">
            <FaBroom />
          </div>
          <h3>Cleaning Services</h3>
          <p>
            From daily office cleaning to deep industrial sanitation, our 
            cleaning team ensures spotless, hygienic, and safe spaces.
          </p>

          <ul className="sd-features">
            <li>Daily Office Cleaning</li>
            <li>Deep Cleaning & Disinfection</li>
            <li>Floor & Carpet Care</li>
          </ul>

          {/* Redirect to Cleaning page */}
          <Link to="/cleaning" className="sd-btn">Book Cleaning</Link>
        </div>

        {/* STAFFING */}
        <div className="sd-card">
          <div className="sd-icon">
            <FaUserTie />
          </div>
          <h3>Staffing Solutions</h3>
          <p>
            Professionally trained staff including housekeeping, pantry, 
            supervisors, and industrial workforce for all facility needs.
          </p>

          <ul className="sd-features">
            <li>Trained Facility Staff</li>
            <li>Security & Support Team</li>
            <li>Shift-Based Workforce</li>
          </ul>

          {/* Redirect to Staffing Page */}
          <Link to="/staffing" className="sd-btn">Request Staff</Link>
        </div>

        {/* MAINTENANCE */}
        <div className="sd-card">
          <div className="sd-icon">
            <FaTools />
          </div>
          <h3>Maintenance Services</h3>
          <p>
            Reliable electrical, plumbing, HVAC, and building repair solutions 
            ensuring smooth facility operations.
          </p>

          <ul className="sd-features">
            <li>Electrical Repair</li>
            <li>Plumbing & Fixtures</li>
            <li>HVAC & Equipment Service</li>
          </ul>

          {/* 🔥 Updated Link → Redirects to Maintenance.jsx */}
          <Link to="/maintenance" className="sd-btn">Get Maintenance</Link>
        </div>

      </div>
    </section>
  );
}
