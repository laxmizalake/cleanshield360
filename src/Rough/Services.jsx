import React from "react";
import "../styles/services.css";

import { GiBroom } from "react-icons/gi";
import { FaUsers, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="services-section" id="services">
      <h3 className="services-title">Our Services</h3>
      <p className="services-sub">
        We provide a comprehensive range of facility management solutions.
      </p>

      <div className="services-grid">

        {/* Cleaning */}
        <Link to="/cleaning" className="service-link">
          <div className="service-card">
            <div className="service-icon icon-clean">
              <GiBroom />
            </div>
            <h4>Cleaning</h4>
            <p>Scrubbing and cleaning to make everything sparkle.</p>
          </div>
        </Link>

        {/* Staffing */}
        <Link to="/staffing" className="service-link">
          <div className="service-card">
            <div className="service-icon icon-staff">
              <FaUsers />
            </div>
            <h4>Staffing</h4>
            <p>Reliable planning and on-demand workforce support.</p>
          </div>
        </Link>

        {/* Maintenance */}
        <Link to="/maintenance" className="service-link">
          <div className="service-card">
            <div className="service-icon icon-tools">
              <FaTools />
            </div>
            <h4>Maintenance</h4>
            <p>Wrench checkups and maintenance work.</p>
          </div>
        </Link>

      </div>
    </section>
  );
}
