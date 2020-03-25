CreateAccountController = function(model){
	this.newAccount;
	this.findAccountResult = new Event();		
	this.saveAccountSuccessfull = new Event();
}

CreateAccountController.prototype = {
	
	getCountries : function(){
		$.getJSON("http://localhost:8080/getCountries", function(){
			
		});
	},

	findAccount : function(userNickName){
		var that = this;
		$.get('http://localhost:8080/searchAccount'+userNickName , function(data){
			if (data == false){
				that.newAccount = {
					userNickName 
				}
				that.findAccountResult.notify();
			}else{
				alert("USER NICK NAME EXIST, PLEASE CHANGE IT");
			}
		});
	},

	saveAccount : function(dates){
		var that = this;
		console.log(dates);
		$.post('http://localhost:8080/saveAccount', dates, function(data){
			console.log("saved user ok")
			that.saveAccountSuccessfull.notify();	
		});
	}
}