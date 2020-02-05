var IndexView = function(turnClass, controller, model){
	var that = this;
	this.userLoged = JSON.parse(localStorage.getItem('user'));
	this.controller = controller;
	this.model = model;
	this.turn = turnClass;

	this.user = this.controller.loadUser();
	(this.model.user != null) ? this.loadIndex() : location.href = '../html/login.html';

	this.turn.controller.turnSaved.suscript(function(){
		that.alertMessages('turnSavedSucessfully');
	});
}


IndexView.prototype = {
	loadIndex : function(){
		if (this.userLoged!= null) {
			var userLabel = document.getElementById('user');
			userLabel.innerText = this.userLoged.userNickName ;
			this.turn.user_id = this.user.user_id;
			this.turn.loadTurn();
		}
	},

	alertMessages : function(type){
		switch(type){
			case "turnSavedSucessfully" :
				alert("TURN SAVED SUCESSFULLY");
				break;

			case "turnDeletedSucessfully" :
				alert("TURN DELETED SUCESSFULLY");
				break;
		}
	}
}