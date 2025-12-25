import React, { useState } from "react";
import "../styles/loginmodal.css";
import { FaTimes, FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginModal({ isOpen, onClose }) {
  const [isSignup, setIsSignup] = useState(false);
  const [role, setRole] = useState("user");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (isSignup) {
        // USER REGISTRATION
        await axios.post("http://localhost:5000/api/auth/register", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        alert("Account created successfully!");
        setIsSignup(false);
      } else {
        // 🔐 ADMIN LOGIN (FIXED CREDENTIALS)
        if (role === "admin") {
          if (
            formData.email === "admin@cleanshield.com" &&
            formData.password === "Admin@123"
          ) {
            localStorage.setItem("token", "admin-static-token");
            localStorage.setItem("role", "admin");

            onClose();
            navigate("/admin/dashboard");
          } else {
            alert("Invalid admin email or password");
          }
          return;
        }

        // 👤 USER LOGIN (BACKEND)
        const res = await axios.post("http://localhost:5000/api/auth/login", {
          email: formData.email,
          password: formData.password,
          role,
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);

        onClose();
        navigate("/");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="lm-overlay">
      <div className="lm-modal fade-in">
        <button className="lm-close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <h2 className="lm-title">
          {isSignup ? "Create Your Account" : "Welcome Back"}
        </h2>

        <p className="lm-subtitle">
          {isSignup
            ? "Register to continue with CleanShield"
            : "Login to access CleanShield"}
        </p>

        {/* ROLE SELECT */}
        {!isSignup && (
          <select
            className="lm-role-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        )}

        <div className="lm-form">
          {isSignup && (
            <div className="lm-input-box">
              <FaUser className="lm-input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
              />
            </div>
          )}

          <div className="lm-input-box">
            <FaEnvelope className="lm-input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
            />
          </div>

          <div className="lm-input-box">
            <FaLock className="lm-input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          {isSignup && (
            <div className="lm-input-box">
              <FaLock className="lm-input-icon" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </div>
          )}

          <button className="lm-submit-btn" onClick={handleSubmit}>
            {isSignup ? "Create Account" : "Login"}
          </button>
        </div>

        <p className="lm-toggle-text">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? " Login" : " Create Account"}
          </span>
        </p>
      </div>
    </div>
  );
}
