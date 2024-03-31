const { getAuthorsDao, createAuthorDao } = require('../dao/author.dao');

/**
 * Get all Authors
 * @param {*} req 
 * @param {*} res 
 */
const getAllAuthors = async (req, res) => {
	try {
		const authors = await getAuthorsDao();
		res.status(200).json(authors);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Something went wrong...' });
	}
};

const createAuthor = async (req, res) => {
	try {
		const { author_name: authorName, birth_year: birthYear } = req.body;
		await createAuthorDao(authorName, birthYear);
		res.status(201).json({ message: 'Success' });
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong...' });
	}
};

module.exports = {
	getAllAuthors,
	createAuthor
}