const { addNewJobPosting, fetchJobs } = require("../dao/jobPostings.dao");

//create job posting
const createJob = async (req,res) => {
  try{
    const { title, description, location, deadline, contact, email } = req.body
    // add validations for fields
    await addNewJobPosting({ title, description, location, deadline, contact, email });
    res.json({ status: 201, message: 'Job created successfully!' });
  }
  catch (error) {
    console.log('Erorr', error);
    res.json({ status: 500, message: 'Something went wrong!' });
  }
};
//fetch all jobs
const fetchAllJobs = async (req,res) => {
  try {
    //TODO: add pagination logic
    const fetchedJobs = await fetchJobs();
    res.json({ status: 200, data: fetchedJobs });
  } catch (error) {
    res.json({ status: 500, message: 'Something went wrong!' });
  }
};

//show interest on job /:id

module.exports = {
  createJob,
  fetchAllJobs,
}