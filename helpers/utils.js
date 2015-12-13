/**
 * Created by predo1 on 13/12/15.
 */

var utils = (function(){
    return{
        isValid : function(el){
            return el !== undefined && el != null;
        },
        r : function(min, max){
        		return Math.floor(Math.random() * (max-min)) + min
        }
    }
})();

module.exports = utils;