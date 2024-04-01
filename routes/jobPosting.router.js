const { createJob, fetchAllJobs  } = require('../controllers/jobPosting.controller');
const router = require('express').Router();

router.post('/jobs', createJob);
router.get('/jobs', fetchAllJobs);

module.exports = router;