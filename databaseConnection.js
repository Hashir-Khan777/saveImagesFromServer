const mongoose = require("mongoose");

const databaseConnection = mongoose.connect(
  "mongodb+srv://Hashir_Khan:pass@cluster0.ulzxi.mongodb.net/dbname?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

mongoose.connection
  .on("open", () => {
    console.log("connected...");
  })
  .on("error", (err) => {
    console.log("Error", err);
  });

module.exports = databaseConnection;
