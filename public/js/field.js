/**
 * authod l.tagliabue
 */

//Handle the game/field.jade
var Field = {}
Field.form = $("form[name='userTurn']");
Field.waterDiv = $("div#water");
Field.clickOnSquare = function(data){
	//Url
	var url = "/game/field"


	//Ajax call
	$.post(url, data, function(res){
		console.log("ajax return value:");
		Field.waterDiv.html(res);
	});
};

$(document).ready(function(){
	console.log(Field.waterDiv);
	//event listener on the cells
	var field = $("input[name='field']").val();
	
    $(".field-cell").click(function(ev){
        //element who should have the coordinates
        el = $(this).find('button');
        //if has coordinates can be hit, else not, it has been already hit
        if(el.data('x') != undefined && el.data('y') != undefined){
            //here you can call the api
            console.log("x : " + el.data('x'),"y : " + el.data('y'));
            //Save the info in the hidden field, so we can send to backend
            console.log(el.data('x'));
            console.log(el.data('y'));
            $("input[name='x']").val(el.data('x'));
            $("input[name='y']").val(el.data('y'));
            Field.form.submit();
        }
    });
});