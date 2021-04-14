const router = require("express").Router();
const apiBooks = require("./books");

// API Book routes
router.use("/books", apiBooks);

module.exports = router;