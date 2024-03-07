const express = require("express");
const app = express();
const Models = require("./src/models");
const sequelize = require("./src/utils/databaseInitialization");
const port = 1411;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({force: true});
    // await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
