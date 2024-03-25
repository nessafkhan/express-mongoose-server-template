const { getAllAuthors } = require('../controllers/author.controller');
const router = require('express').Router();

router.get('/authors', getAllAuthors);

module.exports = router;