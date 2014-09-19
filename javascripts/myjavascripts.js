var changeAttribute = function($object, attribute, newValue){
	var obj = {};
	obj[attribute] = newValue; 
	$object.css(obj);
}

$(function(){
	console.log("hello");
	var data =  [
         {"id" : "1", "hexColor" : "#c488f3", "name" : "Under 5lb."},
         {"id" : "2", "hexColor" : "#25a696", "name" : "battery"},
         {"id" : "3", "hexColor" : "#da3b11", "name" : "carbon filter"}
    ]

    var $dropDown = $('#dropdown');
    var $inputWrapper = $("#inputWrapper");

    $inputWrapper.on("click", function(e){
    	changeAttribute($dropDown, "display", "block")
    })

})