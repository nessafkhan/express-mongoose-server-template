const mongoose = require('mongoose');

const JobPostingSchema = new mongoose.Schema( 
  {
    title: { // Job title
      type: String,
      require
    },
    description: {
      type: String,
      require
    },
    location: {
      type: String,
    },
    deadline: {
      type: Date,
    },
    contact: {
      type: String,
      require
    },
    email: {
      type: String,
      require
    },
    isActive: {  // field for archiving job post
      type: boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('JobPosting', JobPostingSchema);