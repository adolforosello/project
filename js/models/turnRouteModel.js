var con = require('./../server');

function addTurn(req, res){
	var turn = req.body;

		var sqlQuery = 'select user_id from users where user_nickName = ?;';
		con.query(sqlQuery,[turn.customer], function(err, result, field){
			if (err) {
				res.status(404).send(err, "There was an error in your mysql query");
			}else if(result.length < 1){
				var customerId = null;
			}else{
				var customerId = result[0].user_id;
			}
			var sqlQuery2 = 'Insert into turns (turn_user_id, turn_customer_id, turn_date, turn_note, turn_update) values (?,?,?,?,now());';
			con.query(sqlQuery2, [turn.user_id, customerId, turn.dateTurn, turn.noteTurn], function(err2, result2, field2){
				if (err2) {
					res.status(404).send(err2, "There was an error in your mysql query")
				}else{
					res.send(result2);
				}
			});
		});
	
}

function loadTurn(req, res){
	console.log(req.params.user_id)
	var sqlQuery = 'select * from turns where turn_user_id = '+req.params.user_id+' and turn_deleted = false;';
	con.query(sqlQuery, function(err, result, field){
		res.send(result);
	});
}

function deleteTurn(req, res){
	var sqlQuery = 'update turns set turn_deleted = true where turn_id = '+req.body.turn_id+';';
	con.query(sqlQuery, function(err, result, fields){
		res.send(result);
	});
}

module.exports = {
	addTurn : addTurn,
	loadTurn : loadTurn,
	deleteTurn : deleteTurn
}