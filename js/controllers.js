login = function(req,res){

	var connection = require('./server');		
	var user = req.body;
	var userNickName = user.userNickName;
	var userPass = user.userPass;
	console.log(userNickName+" "+userPass);
	//loginController = new LoginController(new LoginModel(connection))
	//loginController.login(userNickName, userPass);
}

module.exports = {
	login : login
}