var TurnsView = function(/*index, */controller){
	/*this.index = index;*/

	this.turns = [];
	this.controller = controller;
	var that = this;
	var addTurnButton = document.getElementById('addTurnButton');
	addTurnButton.addEventListener('click', function(){
		that.addTurn(that);
	});

	this.user_id;

	this.controller.turnsLoaded.suscript(function(){
		this.turns = JSON.parse(localStorage.getItem('turns'));
		//console.log(this.turns)
		var allTurnsDiv = document.getElementById('allTurns');
		if(this.turns.length < 1) {
			allTurnsDiv.innerHTML = "You haven't turns!";
		}else{
			allTurnsDiv.innerHTML = 'You have '+this.turns.length+' turns!';
			this.turns.forEach(function(e){
				var turnDiv = document.createElement('div');
				turnDiv.setAttribute('class', 'turnDiv');
				turnDiv.setAttribute('id', e.turn_id);
				turnDiv.innerHTML = "Turn id: "+e.turn_id+"<br>"+"Customer: "+e.turn_customer_id+"<br>"+"Turn date: "+e.turn_date+"<br>";
				
				var deleteTurnButton = document.createElement('input');
				deleteTurnButton.setAttribute('type', 'button');
				deleteTurnButton.setAttribute('value', 'DELETE TURN');
				deleteTurnButton.setAttribute('id', e.turn_id);
				deleteTurnButton.addEventListener('click', function(){
					that.deleteTurn(this)
				});
				
				turnDiv.appendChild(deleteTurnButton);
				allTurnsDiv.appendChild(turnDiv);
			});
		}
	});

	this.controller.turnSaved.suscript(function(){
		that.loadTurn();
	});

}

TurnsView.prototype = {
	addTurn : function(that){
		var dates = {
			user_id : JSON.parse(localStorage.getItem("user")).user_id,
			customer: document.getElementById('customer').value,
			dateTurn : document.getElementById('dateTurn').value,
			noteTurn : document.getElementById('noteTurn').value
		}
		that.controller.addTurn(dates);
	},

	editTurn : function(){

	},

	deleteTurn : function(that){
		this.controller.deleteTurn(that.id);
		
	},

	loadTurn : function(){
		this.controller.loadTurn(this.user_id);
	}
}