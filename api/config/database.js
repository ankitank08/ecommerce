const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

console.log("Connecting to MongoDB:", MONGO_URI); 

const connectDatabase = () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("✅ Mongoose Connected");
        })
        .catch((err) => {
            console.error("❌ MongoDB connection failed:", err.message);
        });
}

module.exports = connectDatabase;
