const express = require("express");

const app = express();


app.get("/user", (req, res, next) => {
  console.log("Handling the route user");
  next();
});
app.get("/user", (req, res) => {
  console.log("Handling the route user 2");
  res.send("Response-2");
});


app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000...");
});
