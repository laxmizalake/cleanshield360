const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

// ROUTES
const contactRoutes = require("./routes/contactRoutes.js");
const resumeRoutes = require("./routes/resumeRoutes.js");

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// ================= STATIC FILE ACCESS =================
// IMPORTANT: This allows admin to VIEW resume files
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

// ================= API ROUTES =================
// Contact messages
app.use("/api/contact", contactRoutes);

// Resume upload + fetch
// Final working endpoints:
// POST   /api/resumes/upload
// GET    /api/resumes
app.use("/api/resumes", resumeRoutes);

// ================= TEST ROUTE =================
app.get("/", (req, res) => {
  res.send("CleanShield Backend is running 🚀");
});

// ================= SERVER =================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
