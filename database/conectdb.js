import mongoose, { connect, connection } from "mongoose";

const uri =
  "mongodb+srv://lukas:lukitas3@cluster0.kpcdshi.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Connected to the database");
});

module.exports = db;
