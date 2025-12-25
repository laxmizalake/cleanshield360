import React, { useState } from "react";
import {
  FaUsers,
  FaUserTie,
  FaFileUpload,
  FaCheckCircle
} from "react-icons/fa";
import "../styles/HR.css";
import axios from "axios";

const HR = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a resume file");
      return;
    }

    setUploading(true);
    setProgress(0);
    setSuccess(false);
    setError("");

    const formData = new FormData();
    formData.append("resume", file);

    try {
      await axios.post(
        "http://localhost:5000/api/resumes/upload",
        formData,
        {
          onUploadProgress: (e) => {
            const percent = Math.round(
              (e.loaded * 100) / e.total
            );
            setProgress(percent);
          }
        }
      );

      setSuccess(true);
      setFile(null);
    } catch (err) {
      setError("Resume upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="hr-page">
      {/* ================= HEADER ================= */}
      <div className="hr-header">
        <h1>Human Resource Services</h1>
        <p>
          We help organizations hire skilled professionals and manage
          workforce efficiently with secure and reliable HR solutions.
        </p>
      </div>

      {/* ================= SERVICES GRID ================= */}
      <div className="hr-grid">
        <div className="hr-card">
          <div className="hr-icon">
            <FaUsers />
          </div>
          <h3>Recruitment Solutions</h3>
          <ul>
            <li>End-to-end hiring process</li>
            <li>Verified candidates</li>
            <li>Fast onboarding</li>
          </ul>
        </div>

        <div className="hr-card">
          <div className="hr-icon">
            <FaUserTie />
          </div>
          <h3>Staffing Services</h3>
          <ul>
            <li>Permanent staffing</li>
            <li>Contract hiring</li>
            <li>Payroll management</li>
          </ul>
        </div>

        <div className="hr-card">
          <div className="hr-icon">
            <FaFileUpload />
          </div>
          <h3>Resume Management</h3>
          <ul>
            <li>Secure resume upload</li>
            <li>Admin-only access</li>
            <li>Status tracking</li>
          </ul>
        </div>
      </div>

      {/* ================= RESUME UPLOAD ================= */}
      <div className="resume-section">
        <div className="resume-card">
          <div className="resume-icon">
            {success ? (
              <FaCheckCircle className="success-icon" />
            ) : (
              <FaFileUpload />
            )}
          </div>

          <h2>Upload Your Resume</h2>
          <p>Accepted formats: PDF / DOC / DOCX</p>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files[0])}
          />

          {!uploading && !success && (
            <button onClick={handleUpload}>
              Upload Resume
            </button>
          )}

          {uploading && (
            <div className="upload-animation">
              <p>Uploading... {progress}%</p>
              <div className="progress-bar">
                <span style={{ width: `${progress}%` }} />
              </div>
            </div>
          )}

          {success && (
            <p className="success-text">
              Resume uploaded successfully 🎉
            </p>
          )}

          {error && (
            <p className="error-text">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HR;
