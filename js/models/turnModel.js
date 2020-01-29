var con = require('./../server');

function addTurn(req, res){
	var turn = req.body;

	//turn.customer 
	
		var sqlQuery = 'select user_id from users where user_nickName = ?;';
		con.query(sqlQuery,[turn.customer], function(err, result, field){
			if (err) {
				res.status(404).send(err, "There was an error in your mysql query");
			}else if(result.length < 1){
				var customerId = null;
				//res.send('No result');
			}else{

				var customerId = result[0].user_id;
				console.log(customerId)
			}
			
			var sqlQuery2 = 'Insert into turns (turn_customer_id, turn_date, turn_note, turn_update) values (?,?,?,now());';
			con.query(sqlQuery2, [customerId, turn.dateTurn, turn.noteTurn], function(err2, result2, field2){
				if (err2) {
					res.status(404).send(err2, "There was an error in your mysql query")
				}else{
					console.log(result2);
				}
			});
		});
	
}


module.exports = {
	addTurn : addTurn
}