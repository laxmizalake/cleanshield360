import React, { useEffect, useState } from "react";
import "./AdminContacts.css";

const AdminContacts = ({ search = "", statusFilter = "all", onStatsUpdate }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const normalizeStatus = (status) =>
    status ? status.toLowerCase() : "pending";

  const fetchContacts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contact");
      const data = await res.json();

      const normalized = data.map((c) => ({
        ...c,
        status: normalizeStatus(c.status),
      }));

      setContacts(normalized);
      setLoading(false);

      onStatsUpdate?.(normalized);
    } catch (err) {
      console.error("Error fetching contacts", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  /* 🔄 STATUS CHANGE */
  const updateStatus = async (id, newStatus) => {
    try {
      await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      const updated = contacts.map((c) =>
        c.id === id ? { ...c, status: newStatus } : c
      );

      setContacts(updated);
      onStatsUpdate?.(updated);
    } catch (err) {
      console.error("Status update failed", err);
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm("Delete this message?")) return;

    await fetch(`http://localhost:5000/api/contact/${id}`, {
      method: "DELETE",
    });

    fetchContacts();
  };

  /* 🔍 FILTERING */
  const filteredContacts = contacts.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.subject.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "all" || c.status === statusFilter;

    return matchSearch && matchStatus;
  });

  return (
    <div className="admin-contacts">
      <h2>Contact Messages</h2>

      {loading ? (
        <p>Loading messages...</p>
      ) : filteredContacts.length === 0 ? (
        <p>No contact messages found.</p>
      ) : (
        <div className="contact-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Location</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Received</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredContacts.map((c) => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.location || "-"}</td>
                  <td>{c.subject}</td>
                  <td className="message-cell">{c.message}</td>

                  <td>
                    {c.created_at
                      ? new Date(c.created_at).toLocaleString()
                      : "-"}
                  </td>

                  {/* STATUS */}
                  <td>
                    <select
                      className={`status-select ${c.status}`}
                      value={c.status}
                      onChange={(e) =>
                        updateStatus(c.id, e.target.value)
                      }
                    >
                      <option value="pending">Pending</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteContact(c.id)}
                    >
                      Delete
                    </button>
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

export default AdminContacts;
