const mongoose = require('mongoose')

const connectionString = 'mongodb://mongo:27017/codewithjs';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB