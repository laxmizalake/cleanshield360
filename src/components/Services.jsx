import React from "react";
import "../styles/services.css";
import { Link } from "react-router-dom";

import { GiBroom } from "react-icons/gi";
import { FaUsers, FaTools, FaClipboardCheck } from "react-icons/fa";

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

        {/* Maintenance */}
        <Link to="/maintenance" className="service-link">
          <div className="service-card">
            <div className="service-icon icon-tools">
              <FaTools />
            </div>
            <h4>Maintenance</h4>
            <p>Preventive and corrective maintenance services.</p>
          </div>
        </Link>

        {/* HR & Statutory */}
        <Link to="/hr" className="service-link">
          <div className="service-card">
            <div className="service-icon icon-hr">
              <FaClipboardCheck />
            </div>
            <h4>HR Solutions</h4>
            <p>Reliable workforce support with complete HR compliance.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
