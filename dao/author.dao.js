const AuthorModel = require('../models/author.model');

const getAuthors = async () => {
  return await AuthorModel.find().limit(5).lean();
};

module.exports ={
  getAuthors
}