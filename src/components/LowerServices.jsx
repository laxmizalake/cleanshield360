import React from "react";
import "../styles/lower.css";
import van from "../assets/van-illustration.png";

export default function LowerServices() {
  return (
    <section className="lower-section-wrapper">
      <div className="lower-services">
        <div className="lower-left">
          <h3>Services</h3>
          <p>
            We provide a comprehensive range of facility management solutions.
          </p>
        </div>

        <div className="lower-right">
          <img src={van} alt="service van" className="van" />
        </div>
      </div>
    </section>
  );
}
