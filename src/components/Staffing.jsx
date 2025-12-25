import React from "react";
import "../styles/staffing.css";
import {
  FaUserTie,
  FaUserShield,
  FaUsersCog,
  FaConciergeBell,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ import navigate

export default function Staffing() {
  const navigate = useNavigate(); // ✅ initialize navigate

  // ✅ Redirect to Contact page
  const handleRequest = () => {
    navigate("/contact");
  };

  return (
    <section className="staffing-wrapper">

      {/* PAGE HEADING */}
      <div className="staffing-header">
        <h2>Staffing Services</h2>
        <p>
          Trained, verified and reliable facility staff to support your
          housekeeping, pantry, security and industrial operations.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="staffing-grid">

        {/* HOUSEKEEPING STAFF */}
        <div className="staff-card">
          <div className="staff-icon">
            <FaConciergeBell />
          </div>

          <h3>Housekeeping Staff</h3>
          <p>
            Well-trained male and female housekeeping staff available on
            daily, weekly, or monthly contract basis.
          </p>

          <ul className="staff-features">
            <li>Uniformed Personnel</li>
            <li>Daily/Weekly/Monthly Service</li>
            <li>Dedicated Floor Staff</li>
          </ul>

          <button className="staff-btn" onClick={handleRequest}>
            Request Housekeepers
          </button>
        </div>

        {/* PANTRY & OFFICE ASSISTANTS */}
        <div className="staff-card">
          <div className="staff-icon">
            <FaUserTie />
          </div>

          <h3>Pantry & Office Assistants</h3>
          <p>
            Polished and professional pantry assistants to manage beverages,
            food service and meeting room arrangements.
          </p>

          <ul className="staff-features">
            <li>Beverage & Food Serving</li>
            <li>Pantry Stock Management</li>
            <li>Meeting Room Setup</li>
          </ul>

          <button className="staff-btn" onClick={handleRequest}>
            Request Pantry Staff
          </button>
        </div>

        {/* SECURITY PERSONNEL */}
        <div className="staff-card">
          <div className="staff-icon">
            <FaUserShield />
          </div>

          <h3>Security Personnel</h3>
          <p>
            Trained security guards equipped with knowledge of CCTV support
            and entry management.
          </p>

          <ul className="staff-features">
            <li>Verified Guards</li>
            <li>CCTV Monitoring Support</li>
            <li>Gate & Entry Management</li>
          </ul>

          <button className="staff-btn" onClick={handleRequest}>
            Request Security
          </button>
        </div>

        {/* SKILLED & SEMI-SKILLED LABOUR */}
        <div className="staff-card">
          <div className="staff-icon">
            <FaUsersCog />
          </div>

          <h3>Skilled & Semi-Skilled Labour</h3>
          <p>
            Reliable labour force for factories, warehouses, and industrial
            operations with optional supervisors.
          </p>

          <ul className="staff-features">
            <li>Factory & Warehouse Staff</li>
            <li>Machine Operators</li>
            <li>Stock Handlers</li>
          </ul>

          <button className="staff-btn" onClick={handleRequest}>
            Request Workforce
          </button>
        </div>

      </div>
    </section>
  );
}
