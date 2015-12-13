var _ = require('underscore');
var Square = require('../helpers/square');

var config = {
  rows: _.range(16),
  cols: _.range(16),
  flowers: _.range(52),
  neighborhood: [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]]
};

function Field(){

}
module.exports = {
  /**
   * Method that initialize e garden field.
   * @return The garden initialized based of the config info set at the top of the file.
   */
  initGarden: function(){
    var neighborhood = config.neighborhood;
    var newField = createGarden(config.rows.length, config.cols.length, config.flowers);
    //Iterate over rows len
    config.rows.forEach(function(r){
      //Iterate over cols len
      config.cols.forEach(function(c){
        fls = 0;
        if(newField[r][c].isNotFlower()){
          //Iterate over number of neighborhood of a square
          _.range(neighborhood.length).forEach(function(n){
            var rows = r + neighborhood[n][0];
            var cols = c + neighborhood[n][1];     
            if(isInRange(rows, cols) && newField[rows][cols].isFlower()){
              //If a neighbrohood ha a flowers increase the conuter
              fls++;     
            }
          });
          //Set the value
          newField[r][c].setInfo(fls);
        }
      });
    });

    //DBG - print the field
    var str = "";
    newField.forEach(function(r){
      r.forEach(function(s){
        str += s.getInfo() + "  ";
      });
      console.log(str);
      str = "";
    });

    var str = "";
    newField.forEach(function(r){
      r.forEach(function(s){
        str += s.printableCoords() + " ";
      });
      console.log(str);
      str = "";
    });
    return newField;
  }  
};
    
function r(min,max){
  return Math.floor(Math.random()*(max-min)) + min;
}
    
function createGarden(nRows, nCols, flowers){
  var field = emptyField();
    
  //Generate an field with only the flowers set.
  flowers.forEach(function(e){
    do{
      var seed = r(0, (nCols * nRows)-1);
      var x = Math.floor(seed / nRows);
      var y = Math.floor(seed % nCols); 
    }while(field[x][y].isFlower()); 
    field[x][y].setFlower();
  });
  return field;
}


//Private method  
function emptyField(){
  var matrix = [];
  config.rows.forEach(function(i){
    matrix[i] = [];
    config.cols.forEach(function(j){
      matrix[i][j] = new Square(0, i, j);
      matrix[i][j].getInfo();
    });
  });
  return matrix;
}

function isInRange(x, y){
  return (x in _.range(16) && y in _.range(16));
}
