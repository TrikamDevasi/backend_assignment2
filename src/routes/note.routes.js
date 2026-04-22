const express = require("express");
const router = express.Router();

const {
  // CRUD
  createNote,
  createBulkNotes,
  getAllNotes,
  getNoteById,
  replaceNote,
  updateNote,
  deleteNote,
  deleteBulkNotes,
  // Route params
  getNotesByCategory,
  getNotesByStatus,
  getNoteSummary,
  // Query params
  filterNotes,
  getPinnedNotes,
  filterByCategory,
  filterByDateRange,
  // Pagination
  paginateNotes,
  paginateByCategory,
  // Sorting
  sortNotes,
  sortPinnedNotes,
} = require("../controllers/note.controller");

// ─────────────────────────────────────────────
// IMPORTANT: Route order matters — specific paths MUST come before /:id
// ─────────────────────────────────────────────

// CRUD — bulk routes first (before /:id)
router.post("/bulk", createBulkNotes);
router.delete("/bulk", deleteBulkNotes);

// Route param sections
router.get("/category/:category", getNotesByCategory);
router.get("/status/:isPinned", getNotesByStatus);

// Query param sections
router.get("/filter", filterNotes);
router.get("/filter/pinned", getPinnedNotes);
router.get("/filter/category", filterByCategory);
router.get("/filter/date-range", filterByDateRange);

// Pagination
router.get("/paginate", paginateNotes);
router.get("/paginate/category/:category", paginateByCategory);

// Sorting
router.get("/sort", sortNotes);
router.get("/sort/pinned", sortPinnedNotes);

// CRUD — single-item routes LAST (/:id must always be last)
router.post("/", createNote);
router.get("/", getAllNotes);
router.get("/:id/summary", getNoteSummary);
router.get("/:id", getNoteById);
router.put("/:id", replaceNote);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;
