
var IndexModel = function(){
	this.user = JSON.parse(localStorage.getItem('user'));
	this.userChecked = new Event(this);
	this.loginSuccessful = new Event(this);
};

IndexModel.prototype = {
	checkUser : function(userNickName){
		if(this.user == null){
			this.userChecked.notify();
		}
	},
	loginSuccessful : function(){

	}


}
