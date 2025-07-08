const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/document_management', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('db connect!');
    } 
    catch (error) {
        console.error('db not connected:', error);
        // process.exit(1);
    }
};

module.exports = connectDB;

