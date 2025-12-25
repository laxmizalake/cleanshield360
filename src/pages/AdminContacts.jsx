import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
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

  /* 🔍 FILTER */
  const filteredContacts = contacts.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.subject.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "all" || c.status === statusFilter;

    return matchSearch && matchStatus;
  });

  /* 📥 EXCEL EXPORT WITH SEPARATE SHEETS */
  const exportExcel = () => {
    if (contacts.length === 0) return alert("No data to export");

    const formatData = (list) =>
      list.map((c) => ({
        Name: c.name,
        Email: c.email,
        Location: c.location || "-",
        Subject: c.subject,
        Message: c.message,
        Status: c.status,
        Received: c.created_at
          ? new Date(c.created_at).toLocaleString()
          : "-",
      }));

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      XLSX.utils.json_to_sheet(formatData(contacts)),
      "All Contacts"
    );

    XLSX.utils.book_append_sheet(
      workbook,
      XLSX.utils.json_to_sheet(
        formatData(contacts.filter((c) => c.status === "pending"))
      ),
      "Pending"
    );

    XLSX.utils.book_append_sheet(
      workbook,
      XLSX.utils.json_to_sheet(
        formatData(contacts.filter((c) => c.status === "resolved"))
      ),
      "Resolved"
    );

    XLSX.writeFile(workbook, "CleanShield_Contacts.xlsx");
  };

  return (
    <div className="admin-contacts">
      <div className="contacts-header">
        <h2>Contact Messages</h2>

        <button className="export-btn" onClick={exportExcel}>
          ⬇ Download Excel
        </button>
      </div>

      {loading ? (
        <p className="state-text">Loading messages...</p>
      ) : filteredContacts.length === 0 ? (
        <p className="state-text">No contact messages found.</p>
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
