var bodyParser = require('body-parser')
var express = require('express')
var app = express()
var PORT = process.env.PORT || 8080;
var path = require("path");

app.get('/', function (req, res) {
  res.send('Hello World')
})


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});
