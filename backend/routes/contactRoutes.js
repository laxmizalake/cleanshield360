// routes/contactRoutes.js
const express = require("express");
const router = express.Router();

const {
  saveContact,
  getAllContacts,
  deleteContact,
} = require("../controllers/contactController");

// SAVE CONTACT FORM (USER)
router.post("/", saveContact);

// GET ALL CONTACTS (ADMIN)
router.get("/", getAllContacts);

// DELETE CONTACT (ADMIN)
router.delete("/:id", deleteContact);

module.exports = router;
