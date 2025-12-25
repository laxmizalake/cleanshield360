const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  uploadResume,
  getResumes
} = require("../controllers/resumeController");

// ================= MULTER CONFIG =================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/resumes");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ================= ROUTES =================

// 👉 FIX: THIS ROUTE WAS MISSING
router.post("/upload", upload.single("resume"), uploadResume);

// Fetch resumes (admin)
router.get("/", getResumes);

module.exports = router;
