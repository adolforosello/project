var IndexView = function(controller, model){
	var that = this;
	
	this.controller = controller;
	this.model = model;

	this.user = this.controller.loadUser();
	(this.model.user != null) ? this.loadIndex() : location.href = '../html/login.html';

}

IndexView.prototype = {
	loadIndex : function(){

	}
}