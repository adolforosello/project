var con = require('./../server');

login = function(req,res){
	var user = req.body;
	var userNickName = user.userNickName;
	var userPass = user.userPass;
	var sqlQuery = 'select * from users where user_nickName = ? and user_pass = ? ;';

	con.query(sqlQuery,[userNickName, userPass],function(err, result, fields){
		if(err) { 
			res.status(404).send(err, "There was an error in your mysql query");
		}else if(result.length<1){
			res.send(console.log('no result')); 
		}else{
			
			var sqlQuery2 = 'insert into usersmovement (userMovement_user_id, userMovement_MovementType, userMovement_date, userMovement_datetime) values (?,?,now(),now());';
			con.query(sqlQuery2,[result[0].user_id, 'login'],function(err2, result2, fields2){
					if (err2) {
						res.status(404).send(err2, "There was an error in your mysql query");
					}
			var myResult = {
				user_id : result[0].user_id,
				userNickName : result[0].user_nickName,
				userPublicIp :'',
				userMac : ''
				} 
			res.send(myResult);
			});
		}
		
	});
}

logOut = function(req, res){
	var user_id = req.body.user.user_id;
	var sqlQuery = 'insert into usersmovement (userMovement_user_id, userMovement_MovementType, userMovement_date, userMovement_datetime) values (?,?,now(),now());';
		con.query(sqlQuery,[user_id, 'logOut'],function(err, result, fields){
			if (err) {
				res.status(404).send(err, "There was an error in your mysql query");
			}
			res.send(console.log('logOut sucessfull'));
	});
}

module.exports = {
	login : login,
	logOut : logOut
}


