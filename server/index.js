const express = require("express");
const {connectToDB} = require("./controllers/database/nosql");

let app = express();

app.use("/", (req, res, next) => {
  res.send("<h1>Welcome to the shop</h1>");
});

connectToDB(() => {
  app.listen(3000);
});
