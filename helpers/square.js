
var Coors = require("./coors");

function Square(i, nx, ny){
	this.info = i;
	this.hit = false;
	this.coords = new Coors(nx,ny);
}

//toString
Square.prototype.toString = function(){
	return "info : " + this.info + " state: " + this.state;
}

//Getter coords
Square.prototype.getCoords = function(){
	return this.coords;
}

//Printable coords
Square.prototype.printableCoords = function(){
	return this.coords.x + "." + this.coords.y;
}

//Getter info
Square.prototype.getInfo = function(){
	return this.info;
}

//Setters info
Square.prototype.setFlower = function(){
	this.info = "F"
}

Square.prototype.setInfo = function(i){
	if(i == "F") throw new Error("Can't set F value to non flower square");
	this.info = i;
}

//Getter state
Square.prototype.getState = function(){
	return this.state;
}

//Setter state
Square.prototype.setState = function(s){
	this.state = s;
}

//Boolean method
Square.prototype.isHit = function(){
	return this.state == "hit";
}

Square.prototype.isSmallBlue = function(){
	return this.info == 0;
}

Square.prototype.isFlower = function(){
	return this.info == "F";
}

Square.prototype.isNotFlower = function(){
	return this.info != "F";
}

module.exports = Square;

