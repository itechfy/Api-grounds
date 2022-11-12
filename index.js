var express = require("express");
const { grounds } = require("./handlers/grounds");
const { owner } = require("./handlers/ground-owner");
var app = express();
const PORT = process.env.PORT || 5050;

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("This is my demo project");
});
app.get("/grounds", grounds);

app.get("/coach/:id", owner);

app.listen(PORT, function () {
  console.log(`Demo project at: ${PORT}!`);
});
