var express = require("express");
const { grounds } = require("./handlers/grounds");
const { owner } = require("./handlers/ground-owner");
const { owners } = require("./handlers/all-owners");
const { groundAndOwner } = require("./handlers/ground-and-owner");
const { setVerified } = require("./handlers/verifyGround");

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
  res.send("You are on Home Page");
});
app.get("/grounds", grounds);

app.get("/owner/:id", owner);

app.get("/owner", owners);

app.get("/ground-and-owner", groundAndOwner);

// example.com/verify/ground ?id=1&type=cricket&city=islamabad            //id of ground to verify
app.patch("/verify/ground*", setVerified);

app.listen(PORT, function () {
  console.log(`Demo project at: ${PORT}!`);
});
