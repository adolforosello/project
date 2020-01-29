var IndexController = function(model){
	this.model = model;
};

IndexController.prototype = {
	/*checkUser : function(user){
		this.model.checkUser(user);
	}*/
	loadUser : function(){
		this.model.loadUser();
	}
}