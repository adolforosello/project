var TurnsView = function(controller){
//	this.Turn = turnClass;
	this.controller = controller;
	var that = this;
	var addTurnButton = document.getElementById('addTurnButton');
	addTurnButton.addEventListener('click', function(){
		that.addTurn(that);
	});

	var deleteTurnButton = document.getElementById('deleteTurnButton');
	deleteTurnButton.addEventListener('click', this.deleteTurn);
}

TurnsView.prototype = {
	addTurn : function(that){
		var dates = {
			customer: document.getElementById('customer').value,
			dateTurn : document.getElementById('dateTurn').value,
			//hourTurn : document.getElementById('hourTurn'),
			noteTurn : document.getElementById('noteTurn').value
		}
//		var turn = new Turn(dates);
		console.log(dates)
		that.controller.addTurn(dates);
	},

	editTurn : function(){

	},

	deleteTurn : function(){

	}
}

//var turnModel = new TurnModel();
var turnController = new TurnController();
var turnView = new TurnsView(turnController);
