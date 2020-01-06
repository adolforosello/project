var express = require('express');
var app = express();

var bodyParser = require("body-parser");
var conection = require('./server');


var controller = require('./controllers');

//var loginModel = new LoginModel(conection);
//var loginController = new LoginControllerClass(loginModel); 

app.use(bodyParser.urlencoded({
	extended : true
}));

app.use(bodyParser.json());
var port = "8080"

app.post('/login', controller.login);

app.listen(port, function(){
	console.log('listen port ');
});

