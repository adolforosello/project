var LoginController = function(model){
	this.model = model;

}

LoginController.prototype = {
	login : function(userNickName, userPass){

		console.log("userName: "+userNickName+"pass: "+userPass);
	}
}