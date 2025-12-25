import React from "react";
import "../styles/HR.css";
import {
  FaClipboardCheck,
  FaUsersCog,
  FaUserTie,
  FaUpload
} from "react-icons/fa";

const HR = () => {
  return (
    <section className="hr-page">
      {/* HEADER */}
      <div className="hr-header">
        <h1>HR & Statutory Compliance Services</h1>
        <p>
          End-to-end HR compliance solutions ensuring legal adherence,
          risk mitigation, and smooth workforce operations.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="hr-grid">
        {/* Labour Law Compliance */}
        <div className="hr-card">
          <div className="hr-icon">
            <FaClipboardCheck />
          </div>
          <h3>Labour Law Compliance</h3>
          <ul>
            <li>Payroll, PF & ESI</li>
            <li>Employee Statutory Management</li>
            <li>Audits & Government Liaison</li>
            <li>Professional Tax Compliance</li>
          </ul>
        </div>

        {/* Contract Staffing */}
        <div className="hr-card">
          <div className="hr-icon">
            <FaUsersCog />
          </div>
          <h3>Contract Staffing</h3>
          <ul>
            <li>Temporary Workforce Provision</li>
            <li>Candidate Sourcing & Screening</li>
            <li>Onboarding & Deployment</li>
            <li>Payroll & Compliance Management</li>
          </ul>
        </div>

        {/* Permanent Staffing */}
        <div className="hr-card">
          <div className="hr-icon">
            <FaUserTie />
          </div>
          <h3>Permanent Staffing</h3>
          <ul>
            <li>Full-Time Recruitment</li>
            <li>Talent Sourcing & Screening</li>
            <li>Onboarding & Integration</li>
            <li>Retention & Employee Support</li>
          </ul>
        </div>
      </div>

      {/* UPLOAD RESUME */}
      <div className="resume-section">
        <div className="resume-card">
          <div className="resume-icon">
            <FaUpload />
          </div>

          <h2>Upload Your Resume</h2>
          <p>
            Looking for the right opportunity? Share your resume with us and
            our HR team will connect with you.
          </p>

          <label className="resume-upload">
            <input type="file" accept=".pdf,.doc,.docx" />
            <span>Choose File</span>
          </label>

          <small>
            Accepted formats: PDF, DOC, DOCX • Max size 5MB
          </small>
        </div>
      </div>
    </section>
  );
};

export default HR;
