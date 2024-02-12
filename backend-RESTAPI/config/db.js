const mongoose = require("mongoose");

// mongoose.connect() returns a promise so handle it with async-await
const connectDB = async() => {
  const connect = await mongoose.connect(process.env.MONGO_URI);
  console.log(`mongodb connected ${connect.connection.host}`)
}

mongoose.set('strictQuery', true)

module.exports = connectDB;