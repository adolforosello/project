var TurnController = function(){
	this.turnSaved = new Event();
	this.turnsLoaded = new Event();
}

TurnController.prototype = {
	addTurn : function(dataTurn){
	var that = this;
		$.post('http://localhost:8080/addTurn', dataTurn,  function(data){
			
			that.turnSaved.notify();
		});
	},

	loadTurn : function(user_id){
		var that = this;
		$.get('http://localhost:8080/loadTurn'+user_id, function(data){
			console.log(data)
			localStorage.setItem('turns',JSON.stringify(data));
			that.turnsLoaded.notify();
		});

	},

	deleteTurn(turn_id){
		var that = this;
		var dataTurn = {
			turn_id : turn_id
		}

		$.post('http://localhost:8080/deleteTurn', dataTurn, function(data){
			that.turnSaved.notify();
		});
	}
}