CreateAccountView = function(controller, countries, typeAccount){
	this.controller = controller;
	this.dates = {};
	this.typeAccount = typeAccount;
	var that = this;
	this.countries = countries;
	var sendButton = document.getElementById('sendButton');
	sendButton.addEventListener('click', function(){
		that.formControll();
	});

	this.controller.findAccountResult.suscript(function(){
		that.dates.userNickName = that.controller.newAccount.userNickName;
		that.saveAccount(that.dates);
	});

	this.controller.saveAccountSuccessfull.suscript(function(){
		alert("ACCOUNT CREATE SUCCESSFULL!");
		window.location.href = "login.html";
	});
	


}

CreateAccountView.prototype = {

	loadView : (function(){
		//location.reload();
		var countriesSelect = document.getElementById('userCountry');
		this.countries.forEach(function(e){
			var option = document.createElement('option');
			option.setAttribute('value',e.name);
			option.innerHTML = e.name;
			countriesSelect.appendChild(option);
		});

	})(),

	getCountries : function(){
		that.controller.getCountries();
	},

	formControll : function(){

		var confirmFlag = true;
		var formDates = document.getElementsByClassName('accountForm');

		var dates = new Array();

		if(this.typeAccount == 2 || this.typeAccount == 1){
			var pass = document.getElementById('userPass');
			var pass2 = document.getElementById('userPass2');
			if (pass.value != pass2.value) {
				pass.labels[2].style.display = 'flex';
				pass2.labels[2].style.display = 'flex';
				confirmFlag = false;
			}else{
				pass.labels[2].style.display = 'none';
				pass2.labels[2].style.display = 'none';
			}
		}

		for(var c = 1; c<formDates.length; c++){
			if (formDates[c].value == "") {
				formDates[c].labels[1].style.display = "flex";
				confirmFlag = false;
			}else{
				//console.log(formDates[c].labels);
				formDates[c].labels[1].style.display = "none";

				if(formDates[c].name!= 'userPass2'){
					dates[formDates[c].name] = formDates[c].value; 

				}
			}
		}
		

		var formDatesConfirm = {};
		
		//console.log(object);

		if(confirmFlag){
			
			console.log("form ok");
			dates['userProfile'] = this.typeAccount;
			this.dates = Object.assign(formDatesConfirm, dates);

			if(this.typeAccount == 1 || this.typeAccount == 2 ){
				this.findAccount(dates['userNickName']);
			}else{
				console.log(this.dates)
				console.log(formDatesConfirm)
				this.saveAccount(this.dates)
			}
		}else{
			console.log("form nok");
		}
		
	},

	findAccount : function(userNickName){
		this.controller.findAccount(userNickName);
		
	},
	saveAccount : function(dates){
		console.log(dates);
		this.controller.saveAccount(dates);
	}
}