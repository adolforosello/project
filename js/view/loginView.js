var LoginView = function(/*controller, model*/){
	//this.controller = controller;
	//this.model = model;
	
	this.loginButton = document.getElementById('loginButton');
	this.loginButton.addEventListener("click",this.login);
}

LoginView.prototype = {
	login : function(){
		
		var userData = {
			userNickName : document.getElementById('userNickName').value,
			userPass : document.getElementById('userPass').value
		};

		$.post('http://localhost:8080/login',userData,function(data){
			if (data.userNickName) {
				localStorage.setItem('user',JSON.stringify(data));
				location.href = '../html/index.html';
			}else{

			}
			
		});
	}
}