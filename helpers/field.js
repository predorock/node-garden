var _ = require('underscore');
var Square = require('./square');
var utils = require('./utils');

var config = {
  rows: _.range(16),
  cols: _.range(16),
  flowers: _.range(52),
  neighborhood: [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]],
  isInRange: function(x, y){return (x in _.range(16) && y in _.range(16))}
};

//Pseuto-builder pattern
function Field(){
  //Create the garden
  this.garden = this.createGarden(config.rows.length, config.cols.length, config.flowers);
  //Fill the number in the garden
  this.fillTheNumber(this.garden, config.rows, config.cols, config.neighborhood, config.isInRange);
}

//Method for create a new garden filled with the flowers.
Field.prototype.createGarden = function(nRows, nCols, nFlowers){
  var field = this.emptyGarden();
    
  //Generate an field with only the flowers set.
  nFlowers.forEach(function(e){
    do{
      var seed = utils.r(0, (nCols * nRows)-1);
      var x = Math.floor(seed / nRows);
      var y = Math.floor(seed % nCols); 
    }while(field[x][y].isFlower()); 
    field[x][y].setFlower();
  });
  return field;
}

//Method that create an empty field
Field.prototype.emptyGarden = function(){
  var matrix = [];
  config.rows.forEach(function(i){
    matrix[i] = [];
    config.cols.forEach(function(j){
      //Create the square and save the coords (anche set the initial info value to 0)
      matrix[i][j] = new Square(0, i, j);
      matrix[i][j].getInfo();
    });
  });
  return matrix;
}

/**
 *  Method that get a initialize field and calculate the number to fill in it
 */
Field.prototype.fillTheNumber = function(field, rows, cols, neighborhood, range){
  rows.forEach(function(r){
      //Iterate over cols len
      cols.forEach(function(c){
        fls = 0;
        if(field[r][c].isNotFlower()){
          //Iterate over number of neighborhood of a square
          _.range(neighborhood.length).forEach(function(n){
            var rows = r + neighborhood[n][0];
            var cols = c + neighborhood[n][1];     
            if(range(rows, cols) && field[rows][cols].isFlower()){
              //If a neighbrohood ha a flowers increase the conuter
              fls++;     
            }
          });
          //Set the value
          field[r][c].setInfo(fls);
        }
      });
    });
}

// Field.prototype.toString = function(){
//   var str = "";
//   this.garden.forEach(function(r){
//     r.forEach(function(s){
//       str += s.getInfo() + "  ";
//     });
//     str += "\n";
//   });
//   return str;
// }

Field.prototype.hitSquare = function(x, y){
  console.log("field -> hitSquare");
  this.garden[x][y].setHit();
}


function jsonString2Field(jsonStr){
  f = new Field();
  this.garden = jsonStr.garden;
}

module.exports = Field;