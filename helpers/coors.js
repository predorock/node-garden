/**
 * Created by predo1 on 13/12/15.
 */

function Coors(x,y){
    this.x = x;
    this.y = y;
}

Coors.prototype.x = function(){
    return x;
};

Coors.prototype.y = function(){
    return y;
};

Coors.prototype.getAsAttributes = function(){
    return{
        'data-x' : this.x,
        'data-y' : this.y
    }
};

module.exports = Coors;