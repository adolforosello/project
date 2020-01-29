var TurnController = function(){
	//this.model = model; 
}

TurnController.prototype = {
	addTurn : function(dataTurn){
	console.log('controller')
		$.post('http://localhost:8080/addTurn', dataTurn,  function(data){
	//		this.model.addTurn();

		});
	}
}