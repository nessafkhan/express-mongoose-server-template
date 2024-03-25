const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_CONNECTION_URL);
		console.log('MongoDB connected succesfully');
	} catch (error) {
		console.error('MongoDB failed to connect!', error);
		process.exit(1);
	}
};

module.exports = connectDB;