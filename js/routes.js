var express = require('express');
var cors = require('cors');
var bodyParser = require("body-parser");

var logModel = require('./models/logModel');
var turnModel = require('./models/turnModel');
var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({
	extended : true
}));

app.use(bodyParser.json());
var port = "8080"

app.post('/login', logModel.login);
app.post('/logOut', logModel.logOut);

app.post('/addTurn', turnModel.addTurn)

app.listen(port, function(){
	console.log('listen port ');
});

