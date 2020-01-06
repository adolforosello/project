var IndexView = function(controller, model){
	this.controller = controller;
	this.model = model;
	var that = this;
	this.user;
	this.model.userChecked.suscript(function(){
		that.loadIndex();
	});
	this.model.loginSuccessful.suscript(function(){
		that.loadIndex();
	});
}

IndexView.prototype = {
	loadIndex : function(){
		if(this.model.user == null){
			location.href = '../html/login.html';
		}else{
			
		}
	}
}

