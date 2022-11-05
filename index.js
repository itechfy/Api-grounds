var express = require("express");
const { grounds } = require("./handlers/grounds");
var app = express();
const PORT = process.env.PORT || 5050;
app.get("/", (req, res) => {
  res.send("This is my demo project");
});
app.get("/grounds", grounds);

app.listen(PORT, function () {
  console.log(`Demo project at: ${PORT}!`);
});
