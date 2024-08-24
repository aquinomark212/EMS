const mongoose = require('mongoose');

const mongoDB = async () => {
    try {
        const URI = process.env.DB

        await mongoose.connect(URI);

        console.log('Connected to the database');
        
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

module.exports = mongoDB;