import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AdminResumes.css";

const AdminResumes = () => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/resumes");

      // ✅ HANDLE BOTH POSSIBLE BACKEND RESPONSES
      const resumeData = Array.isArray(res.data)
        ? res.data
        : res.data.resumes || [];

      console.log("Fetched resumes:", resumeData); // 🔍 debug once

      setResumes(resumeData);
    } catch (err) {
      console.error("Failed to fetch resumes", err);
    }
  };

  return (
    <div className="admin-resumes">
      <h2>Uploaded Resumes</h2>

      {resumes.length === 0 ? (
        <p>No resumes uploaded yet.</p>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Resume</th>
                <th>Uploaded At</th>
              </tr>
            </thead>

            <tbody>
              {resumes.map((r, index) => (
                <tr key={r.id || index}>
                  <td>{r.id || index + 1}</td>

                  <td>
                    <a
                      href={`http://localhost:5000/uploads/resumes/${
                        r.resume_file || r.resume || r.file_name
                      }`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Resume
                    </a>
                  </td>

                  <td>
                    {r.uploaded_at
                      ? new Date(r.uploaded_at).toLocaleDateString()
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminResumes;
