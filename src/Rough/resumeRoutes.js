const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  uploadResume,
  getResumes
} = require("../controllers/resumeController");

const router = express.Router();

/* STORAGE */
const storage = multer.diskStorage({
  destination: "uploads/resumes",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = /pdf|doc|docx/;
    const ext = allowed.test(
      path.extname(file.originalname).toLowerCase()
    );
    if (ext) cb(null, true);
    else cb(new Error("Only PDF, DOC, DOCX allowed"));
  }
});

router.post("/upload", upload.single("resume"), uploadResume);
router.get("/", getResumes);

module.exports = router;
