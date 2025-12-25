const db = require("../config/db");

/* UPLOAD RESUME */
exports.uploadResume = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const sql = `
    INSERT INTO resumes (resume_file)
    VALUES (?)
  `;

  db.query(sql, [req.file.filename], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }

    res.json({ message: "Resume uploaded successfully" });
  });
};

/* FETCH RESUMES (ADMIN) */
exports.getResumes = (req, res) => {
  const sql = `
    SELECT * FROM resumes
    ORDER BY uploaded_at DESC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }

    res.json(results);
  });
};
