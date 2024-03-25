const { getAuthors } = require('../dao/author.dao');

/**
 * Get all Authors
 * @param {*} req 
 * @param {*} res 
 */
const getAllAuthors = async (req, res) => {
	try {
		const authors = await getAuthors();
		res.status(201).json(authors);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Something went wrong...' });
	}
};

module.exports = {
	getAllAuthors
}