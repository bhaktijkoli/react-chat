var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname,"public")));

app.listen(3000, ()=> {
  console.log("Server started at port 3000");
});
