var LogController = function(){

}

LogController.prototype = {
	login : function(userData){
		$.post('http://localhost:8080/login', userData, function(data){
			if (data.userNickName) {
				localStorage.setItem('user',JSON.stringify(data));
				location.href = '../html/index.html';
			}else{
				console.log("no user");
				alert("Usuario o contraseña incorrecta");
			}
			
		});
	},
	logOut : function(userData){
		$.post('http://localhost:8080/logOut', userData, function(data){
			localStorage.removeItem('user');
			location.href = '../html/index.html';
		});
	}
}