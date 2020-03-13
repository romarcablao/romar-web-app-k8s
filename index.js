var express = require("express");

var app = express();
const port = 80;
const host = "0.0.0.0";

app.use(express.static(__dirname + "/public"));
app.listen(port, host);

console.log(`Running on http://${host}:${port}`);
