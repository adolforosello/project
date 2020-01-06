var LoginModel = function(conection){
	//this.event = Event;
	this.loginSuccessfull = new Event(this);
//	this.loginSuccessfull = require('./../events');
	this.con = conection;
}

LoginModel.prototype = {
	login : function(userNickName, pass){
		var sqlQuery = 'select * from users where user_nickName = ? and user_password = ?';
		var result;
		con.query(sqlQuery, [userNickName], [pass], function(error, result, fields){
			console.log(result);
		});
		this.loginSuccessfull.notify();
		return result;
	},
}
/*
module.exports = {
	loginModel : loginModel = new LoginModel(conection)
}
*/