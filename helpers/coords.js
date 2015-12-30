/**
 * Created by predo1 on 13/12/15.
 */

function Coords(x,y){
    this.x = x;
    this.y = y;
}

Coords.prototype.x = function(){
    return x;
};

Coords.prototype.y = function(){
    return y;
};

Coords.prototype.getAsAttributes = function(){
    return{
        'data-x' : this.x,
        'data-y' : this.y
    }
};

Coords.prototype.toString = function(){
	return this.x + ":" + this.y;
}
module.exports = Coords;