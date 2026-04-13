const express = require("express");
const router = express.Router();

const {
  createNote,
  createBulkNotes,
} = require("../controllers/note.controller");

// Bulk routes first (before /:id)
router.post("/bulk", createBulkNotes);

// CRUD single
router.post("/", createNote);

module.exports = router;
