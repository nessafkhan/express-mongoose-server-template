const AuthorModel = require('../models/author.model');

const getAuthorsDao = async () => {
  return await AuthorModel.find().limit(5).lean();
};

const createAuthorDao = async (authorName, birthYear) => {
  return await AuthorModel.create({
    name: authorName,
    birth_year: birthYear,
  });
};

module.exports ={
  createAuthorDao,
  getAuthorsDao
}