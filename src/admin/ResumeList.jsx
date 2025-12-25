import React, { useEffect, useState } from "react";

const ResumeList = () => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/resumes")
      .then((res) => res.json())
      .then((data) => setResumes(data));
  }, []);

  return (
    <div>
      <h2>Uploaded Resumes</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Resume</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {resumes.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>
                <a
                  href={`http://localhost:5000/uploads/resumes/${r.resume_file}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download
                </a>
              </td>
              <td>
                {new Date(r.uploaded_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResumeList;
