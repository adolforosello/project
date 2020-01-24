var IndexView = function(controller, model){
	var that = this;
	
	this.controller = controller;
	this.model = model;
	
	this.model.checkUserEvent.suscript(function(){
		that.loadIndex();
	});

	
	this.model.loginSuccessful.suscript(function(){
		that.loadIndex();
	});

	if (window.location.href == "file:///C:/Users/LENOVO/Desktop/projects/project/html/index.html") {
		this.logOutButton = document.getElementById('logOutButton');
		this.logOutButton.addEventListener("click",this.logOut);
	}else{
		this.loginButton = document.getElementById('loginButton');
		this.loginButton.addEventListener("click",this.login);
	}	

}

IndexView.prototype = {
	loadIndex : function(){
		this.model.loadUser();
		
		if(this.model.user == null && window.location.href == "file:///C:/Users/LENOVO/Desktop/projects/project/html/index.html"){
			location.href = '../html/login.html';
		}else if(this.model.user != null && window.location.href == "file:///C:/Users/LENOVO/Desktop/projects/project/html/index.html"){
			var user = document.getElementById('user');
			user.innerHTML = this.model.user.userNickName;
			
		}
	},

	login : function(model){
		var userData = {
			userNickName : document.getElementById('userNickName').value,
			userPass : document.getElementById('userPass').value
		};

		$.post('http://localhost:8080/login', userData, function(data){
			if (data.userNickName) {
				localStorage.setItem('user',JSON.stringify(data));
				location.href = '../html/index.html';
				//this.controller.checkUser(data.userNickName.userNickName)
			}else{
				console.log("no user");
				alert("Usuario o contraseña incorrecta");
			}
			
		});
		
	},
	
	logOut : function(){
		var userData = {
			user : JSON.parse(localStorage.getItem('user'))
		}

		$.post('http://localhost:8080/logOut', userData, function(data){
			localStorage.removeItem('user');
			location.href = '../html/index.html';
			//this.model.checkUser();
		});		
	}
}