$(document).ready(function(){

	console.log("it works.");
	
	
	
	var mil = "start";
	
	
	var hide = function(y){
		console.log(y);
		$(y).removeClass("show");
		$(y).addClass("hide");
	}
	
	var show = function(y){
		console.log(y);
		$(y).removeClass("hide");
		$(y).addClass("show");
	}
	
	$(".title1").click(function(){
		hide(".title1");
	});
	
});