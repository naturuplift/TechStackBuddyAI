const mongoose = require('mongoose');

// Mongo URI connection string 
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/TechStackBuddyAI';

mongoose.connect(MONGODB_URI,{
 tls: true,  // Use TLS for all connections
 tlsAllowInvalidCertificates: false
}).then(() => {
    console.log('MongoDB connected successfully.');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Connect to Mongo
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
// Log Connection Error 
mongoose.connection.on('error', (err) => {
    console.error(`Error connecting to MongoDB: ${err.message}`);
});

// Export the connection 
module.exports = mongoose.connection; 
