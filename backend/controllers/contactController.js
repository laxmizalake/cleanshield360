// controllers/contactController.js
const db = require("../config/db");

// SAVE CONTACT DATA
const saveContact = (req, res) => {
  const { name, email, location, subject, message } = req.body;

  if (!name || !email || !location || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = `
    INSERT INTO contacts (name, email, location, subject, message)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [name, email, location, subject, message],
    (err, result) => {
      if (err) {
        console.error("DB Error FULL:", err);
        return res.status(500).json({ message: "Database error" });
      }

      res.status(201).json({ message: "Contact saved successfully" });
    }
  );
};

// GET ALL CONTACTS (ADMIN)
const getAllContacts = (req, res) => {
  const query = "SELECT * FROM contacts ORDER BY id DESC";

  db.query(query, (err, results) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    res.status(200).json(results);
  });
};

// DELETE CONTACT (ADMIN)
const deleteContact = (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM contacts WHERE id = ?";

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Delete Error:", err);
      return res.status(500).json({ message: "Delete failed" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ message: "Contact deleted successfully" });
  });
};

module.exports = {
  saveContact,
  getAllContacts,
  deleteContact,
};
