const mongoose = require("mongoose");
const config = require("../config/key");

const connectDB = () => {
  mongoose
    .connect(config.mongoURI)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
