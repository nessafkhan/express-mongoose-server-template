require('dotenv').config();
const express = require('express');
const app = express();
const connectDb = require('./connections/mongo')
const authorsRouter = require('./routes/author.route');

connectDb();
//Middlewares
app.use(express.json());
app.use('/', authorsRouter)

app.listen(process.env.PORT, () => console.log(`Server started on port: ${process.env.PORT}`));
