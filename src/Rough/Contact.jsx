import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact-container" id="contact">
      <div className="contact-wrapper">

        {/* LEFT – FORM */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <p>We’re here to assist with facility management, compliance, and hygiene services.</p>

          {/* ✅ LOCATION INPUT FIELD */}

          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>

             <div className="form-group">
            <input type="text" placeholder="Enter your location" required />
          </div>

            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>

            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>

            <button type="submit" className="btn-contact">Send Message</button>
          </form>
        </div>

        {/* RIGHT – DETAILS */}
        <div className="contact-info">
          <h3>Contact Details</h3>

          <div className="info-item">
            <span className="info-title">📍 Address</span>
            <p>Pune, Maharashtra, India</p>
          </div>

          <div className="info-item">
            <span className="info-title">📞 Phone</span>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-item">
            <span className="info-title">✉ Email</span>
            <p>support@cleanshield.in</p>
          </div>

          <div className="info-item">
            <span className="info-title">⏱ Working Hours</span>
            <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
          </div>
        </div>

      </div>
    </section>
  );
}
