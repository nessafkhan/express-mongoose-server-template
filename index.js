require('dotenv').config();
const express = require('express');
const app = express();
const connectDb = require('./connections/mongo')
const jobsRouter = require('./routes/jobPosting.router');

connectDb();
//Middlewares
app.use(express.json());
app.use('/', jobsRouter)

app.listen(process.env.PORT, () => console.log(`Server started on port: ${process.env.PORT}`));
