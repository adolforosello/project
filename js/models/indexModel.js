var IndexModel = function(){
	this.checkUserEvent = new Event(this);
	this.loginSuccessful = new Event(this);
	this.user;
};

IndexModel.prototype = {
	checkUser : function(userNickName){
		if(this.user == null){
			this.checkUserEvent.notify();
		}else{
			
		}
	},
	loginSuccessful : function(){

	},

	loadUser : function(){
		this.user = JSON.parse(localStorage.getItem('user'));
		
	}
}
