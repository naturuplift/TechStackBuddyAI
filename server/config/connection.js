const mongoose = require('mongoose');

// const MONGODB_URI = process.env.MONGODB_URI || 'fallback-local-database-uri';

// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('MongoDB connected successfully.'))
//   .catch(err => console.error('MongoDB connection error:', err));

// mongoose.connection.on('error', err => {
//   console.error('MongoDB error:', err);
//   if (err.message && err.message.code === 'ETIMEDOUT') {
//     console.log('Attempting to re-connect to MongoDB...');
//     mongoose.connect(MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//   } else {
//     console.error('Critical MongoDB connection error:', err);
//     process.exit(1);
//   }
// });

// Mongo URI connection string 
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/StackBuddyAI_DB';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
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
