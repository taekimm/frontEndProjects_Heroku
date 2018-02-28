var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var static = __dirname + "/static/";
app.use(express.static(static));

// setting up ejs and our views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
var port = server.address().port;
console.log("App now running on port", port);
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

// Home
app.get('/', function (req, res) {
  res.render('index');
})

// Modernize
app.get('/modernize', function (req, res) {
    res.render('./modernize/index');
})

// Noam Chomsky website
app.get('/nc', function (req, res) {
  res.render('./nc/index');
})

app.get('/nc/about', function (req, res) {
  res.render('./nc/about');
})

app.get('/nc/news', function (req, res) {
  res.render('./nc/news');
})

app.get('/nc/faq', function (req, res) {
  res.render('./nc/faq');
})

app.get('/nc/contact', function (req, res) {
  res.render('./nc/contact');
})