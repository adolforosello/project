var con = require('./../server');

login = function(req,res){
	var user = req.body;
	var userNickName = user.userNickName;
	var userPass = user.userPass;
	var sqlQuery = 'select * from users where user_nickName = ? and user_pass = ? ;';

	con.query(sqlQuery,[userNickName, userPass],function(err, result, fields){
		if(err) { 
			res.status(404).send(err, "be an error in your sql query");
		}else if(result.length<1){
			res.send(console.log('no result')); 
		}else{
			var myResult = {userNickName : result[0].user_nickName} 
			console.log(result[0].user_nickName)
			res.send(myResult);
		}
		
	});
}

module.exports = {
	login : login
}


