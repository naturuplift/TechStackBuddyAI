const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true, // Ensure SSL is enabled
  sslValidate: true,
}).then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

mongoose.connection.on('error', err => {
  console.error('MongoDB error:', err);
  // Exit if the database connection is critical
  if (err.message.code === 'ETIMEDOUT') {
    console.log('Attempting to re-connect to MongoDB...');
    mongoose.connect(process.env.MONGODB_URI);
  } else {
    process.exit(1);
  }
});
// // Mongo URI connection string 
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/StackBuddyAI_DB';

// mongoose.connect(MONGODB_URI, {

// });
//  // Connect to Mongo
//     mongoose.connection.on('connected', () => {
//         console.log('Connected to MongoDB');
//     });
//     // Log Connection Error 
//     mongoose.connection.on('error', (err) => {
//         console.error(`Error connecting to MongoDB: ${err.message}`);
//     });

//     // Export the connection 
//     module.exports = mongoose.connection; 
