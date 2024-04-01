const mongoose = require('mongoose');

const JobPostingSchema = new mongoose.Schema( 
  {
    title: { // Job title
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    location: {
      type: String,
    },
    deadline: {
      type: Date,
    },
    contact: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    is_active: {  // field for archiving job post
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('JobPosting', JobPostingSchema);