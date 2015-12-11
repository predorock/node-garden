

function getFormInput(formObj){
  var toReturn = {};
  var textInputs = formObj.find("input[type=text], input[type=password]");
  
  $.each(textInputs,function(k,v){
  	toReturn[v.name] = $(v).val();
  });

  return toReturn;
}



$(function(){

	$("form[name=userdata]").submit(function(e){
		e.preventDefault();
		data = getFormInput($(this));
		console.log(data);
	});

});