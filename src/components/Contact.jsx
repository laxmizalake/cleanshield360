import React, { useState } from "react";
import "../styles/contact.css";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        location: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <section className="contact-container" id="contact">
      <div className="contact-wrapper">

        {/* LEFT – FORM */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <p>We’re here to assist with facility management, compliance, and hygiene services.</p>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="location"
                placeholder="Enter your location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-contact">
              Send Message
            </button>
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
            <p>+91 8482877264</p>
          </div>

          <div className="info-item">
            <span className="info-title">✉ Email</span>
            <p>sales@cleanshield360.com</p>
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
