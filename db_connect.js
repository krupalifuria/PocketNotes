let mongoose = require("mongoose");
const { ServerApiVersion } = require("mongodb");

const connectToMongo = () => {
  mongoose.connect(process.env.MONGODB_URI_STRING, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }, () => {
    console.log("Connected to MongoDB");
  });
};

module.exports = connectToMongo;
