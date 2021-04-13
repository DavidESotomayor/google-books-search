const router = require("express").Router();
const booksController = require("../../controllers/books");

// Matches routes with "/api/api-books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.save);

// Matches routes with "/api/api-books/:id"
router.route("/:id")
  .get(booksController.findOne)
  .delete(booksController.remove);

module.exports = router;