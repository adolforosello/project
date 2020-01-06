//var loginModel = require('./../models/loginModel');

var LoginController = function(model){
	this.model = model;

}

LoginController.prototype = {
	login : function(userNickName, userPass){

		//var result = this.model.login(userNickName, userPass);
		console.log("userName: "+userNickName+"pass: "+userPass);
	}
}
/*
function login (req, res){
		var userNickName = req.params.userNickName;
		var userPass = req.params.userPass;
		//var result = this.model.login(userNickName, userPass);
		console.log("userName: "+userNickName+"pass: "+userPass);
	}

module.exports = {
	loginController : loginController = new LoginController(loginModel)
}
*/