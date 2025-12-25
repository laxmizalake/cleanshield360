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
  const query = "SELECT * FROM contacts ORDER BY created_at DESC";

  db.query(query, (err, results) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    res.status(200).json(results);
  });
};

module.exports = {
  saveContact,
  getAllContacts,
};
