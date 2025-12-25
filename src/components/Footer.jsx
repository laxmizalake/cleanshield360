import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-box">
        <p>© {new Date().getFullYear()} CleanShield360 — Facility & Compliance Experts</p>
      </div>
    </footer>
  );
}
