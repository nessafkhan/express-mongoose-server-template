const { getAllAuthors, createAuthor } = require('../controllers/author.controller');
const router = require('express').Router();

router.get('/authors', getAllAuthors);
router.post('/author', createAuthor);

module.exports = router;