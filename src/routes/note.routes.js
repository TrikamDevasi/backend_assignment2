const express = require("express");
const router = express.Router();

const { createNote } = require("../controllers/note.controller");

// POST /api/notes — Create a single note
router.post("/", createNote);

module.exports = router;
