require('dotenv').config();

const mongoose = require('mongoose');
const { ServerApiVersion } = require('mongodb');

const connectToMongo = () => {
  mongoose.connect(process.env.MONGODB_URI_STRING, { serverApi: ServerApiVersion.v1, dbName: 'PocketNotes' }, (err) => {
    if (err) {
      console.error('MongoDB connection error:', err);
    } else {
      console.log('Connected to MongoDB');
    }
  });
};

module.exports = connectToMongo;
