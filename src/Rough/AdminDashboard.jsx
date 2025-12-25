import React, { useEffect, useState } from "react";
import AdminContacts from "./AdminContacts";
import axios from "axios";
import "./AdminDashboard.css";

const AnimatedNumber = ({ value }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 600;
    const increment = Math.max(1, Math.floor(value / 30));
    const stepTime = Math.max(20, duration / value);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span className="stat-number">{display}</span>;
};

const AdminDashboard = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  /* CONTACT STATS */
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    resolved: 0,
  });

  /* RESUME DATA */
  const [resumes, setResumes] = useState([]);

  /* CONTACT STATS UPDATE */
  const handleStatsUpdate = (contacts) => {
    setStats({
      total: contacts.length,
      pending: contacts.filter(c => c.status === "pending").length,
      resolved: contacts.filter(c => c.status === "resolved").length,
    });
  };

  /* FETCH RESUMES */
  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/resumes");
      setResumes(res.data);
    } catch (err) {
      console.error("Failed to fetch resumes");
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Manage contact requests and resumes</p>
      </div>

      {/* CONTACT STATS */}
      <div className="admin-stats">
        <div className="stat-card total">
          <h3>Total Contacts</h3>
          <AnimatedNumber value={stats.total} />
        </div>

        <div className="stat-card pending">
          <h3>Pending</h3>
          <AnimatedNumber value={stats.pending} />
        </div>

        <div className="stat-card resolved">
          <h3>Resolved</h3>
          <AnimatedNumber value={stats.resolved} />
        </div>

        <div className="stat-card resumes">
          <h3>Total Resumes</h3>
          <AnimatedNumber value={resumes.length} />
        </div>
      </div>

      {/* CONTACT FILTERS */}
      <div className="admin-filters">
        <input
          type="text"
          placeholder="Search by name / email / subject"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>

      {/* CONTACTS */}
      <div className="admin-card">
        <h2>Contact Requests</h2>
        <AdminContacts
          search={search}
          statusFilter={statusFilter}
          onStatsUpdate={handleStatsUpdate}
        />
      </div>

      {/* RESUME TABLE */}
      <div className="admin-card">
        <h2>Uploaded Resumes</h2>

        {resumes.length === 0 ? (
          <p>No resumes uploaded yet.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Resume</th>
                <th>Status</th>
                <th>Uploaded At</th>
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
                      View Resume
                    </a>
                  </td>
                  <td>{r.status || "Pending"}</td>
                  <td>
                    {new Date(r.uploaded_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
