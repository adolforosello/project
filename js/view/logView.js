var LogView = function(controller){
	this.controller = controller;
	//this.model = model;
	var that = this;
	
	if(window.location.href == "file:///C:/Users/LENOVO/Desktop/projects/project/html/login.html"){
		this.loginButton = document.getElementById('loginButton');
		this.loginButton.addEventListener('click', function(){
			that.login(that);
		});
	}

	if(window.location.href == "file:///C:/Users/LENOVO/Desktop/projects/project/html/index.html"){
		this.logOutButton = document.getElementById('logOutButton');
		this.logOutButton.addEventListener("click",function(){
			that.logOut(that);
		});
	}
}

LogView.prototype = {


	loadLogin : function(){
		location.href = '../html/login.html';
	},

	login : function(that){
		var userData = {
			userNickName : document.getElementById('userNickName').value,
			userPass : document.getElementById('userPass').value
		}
		console.log(that)
		that.controller.login(userData);
	},
	
	logOut : function(that){
		var userData = {
			user : JSON.parse(localStorage.getItem('user'))
		}
		that.controller.logOut(userData);
	}
}