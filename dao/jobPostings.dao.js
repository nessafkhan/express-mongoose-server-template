const JobPostingModel = require('../models/jobsPostings.model');

/**
 * create new job entry in DB
 */
const addNewJobPosting = async ({ title, description, location, deadline, contact, email }) => {
  return await JobPostingModel.create({
    title,
    description,
    location,
    deadline: Date(deadline),
    contact,
    email,
  });
};

/**
 * Fetch all job postings
 * todo: pagination
 */
const fetchJobs = async () => {
  return await JobPostingModel.find().lean();
};

module.exports = {
  addNewJobPosting,
  fetchJobs
};