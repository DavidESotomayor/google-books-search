const router = require("express").Router();
const apiBooks = require("./api-books");

// API Book routes
router.use("/api-books", apiBooks);

module.exports = router;