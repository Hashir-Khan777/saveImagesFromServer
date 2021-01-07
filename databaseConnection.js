const mongoose = require("mongoose");

const databaseConnection = mongoose.connect(
  "mongodb+srv://Hashir_Khan:hashirkhan555@cluster0.ulzxi.mongodb.net/addToCart?retryWrites=true&w=majority",
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
