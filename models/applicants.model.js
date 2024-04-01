const mongoose = require('mongoose');

const ApplicantSchema = new mongoose.Schema({
  job_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  applicant_name: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  applicant_email: {
    type: String,
    required: true
  }
}, 
{ timestamps: true }
);

module.exports = mongoose.model('Applicants', ApplicantSchema);