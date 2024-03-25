const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema( 
  {
    name: {
      type: String,
    },
    birth_year: {
      type: Number,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Author', AuthorSchema);