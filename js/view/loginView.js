var LoginView = function(controller, model){
	this.controller = controller;
	this.model = model;
	var that = this;
	this.userNickName = document.getElementById('userNickName');
	this.userPass = document.getElementById('userPass');
	
}

LoginView.prototype = {
	login : function(){
		this.controller.login(userNickName,pass);
	}
}