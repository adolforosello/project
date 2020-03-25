var con = require('./../server');

function searchAccount(req, res){
	var user_nickName = req.params.user_nickName;
	var sqlQuery = 'select user_nickName from users where user_nickName = "'+user_nickName+'" ;';
	con.query(sqlQuery, function(err, result, fields){
		if (err) {
			res.status(404).send("mysql query error!",err);
		}
		if (result.length<1) {
			res.send(false);	

		}else{
			res.send(true);
		}
	});
}

function saveAccount(req, res){
	
	if (req.body.userProfile == '1' || req.body.userProfile == '2') {
		console.log('here')
		var sqlQuery = 'insert into users (user_name, user_lastName, user_nickName, user_pass, user_birth, user_country, user_state, user_address, user_profile_id, user_create_date, user_loged, user_deleted) values (?,?,?,?,?,?,?,?,?,now(), false, false);';
	}

	if (req.body.userProfile == 3) {
		console.log('here')
		var sqlQuery = 'insert into clients (client_name, client_lastName, client_address, client_city, client_country, client_phone, client_profile_id, client_create_date, client_deleted) values (?,?,?,?,?,?,?,now(), false);';
	}
	
	var dates = Object.values(req.body);
	
	con.query(sqlQuery, dates, function(err, result, fields){
		if(err){
			res.status(404).send(err);
		}
		console.log(result)
		res.send(result);
	});
}

function getCountries(res, req){
	
}

module.exports = {
	searchAccount : searchAccount,
	saveAccount : saveAccount
}
