var express = require('express');
var cors = require('cors');
var bodyParser = require("body-parser");

var model = require('./models/loginModel');

var app = express();
app.use(cors())

app.use(bodyParser.urlencoded({
	extended : true
}));

app.use(bodyParser.json());
var port = "8080"

app.post('/login', model.login);

app.listen(port, function(){
	console.log('listen port ');
});

