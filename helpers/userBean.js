function UserBean(){
	this.username = "";
	this.password = "";
	this.logged = "";
	this.points = "";
}

UserBean.prototype.getUsername = function(){
	return this.username;
}

UserBean.prototype.setUsername = function(username){
	this.username = username;
}

UserBean.prototype.getPassword = function(){
	return this.password;
}

UserBean.prototype.setPassword = function(password){
	this.password = password;
}

UserBean.prototype.isLogged = function(){
	return this.logged;
}

UserBean.prototype.setLogged = function(flag){
	this.logged = flag;
}

UserBean.prototype.getPoints = function(){
	return this.points;
}

UserBean.prototype.addPoints = function(points){
	this.points += points  
}

module.exports = UserBean;