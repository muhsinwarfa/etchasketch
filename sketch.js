$(function(){
	$("#start").click(function(){
		
		var numberofblocks = prompt("sketch measurement info", "put in the number of squares you want?");
		$("#holder").height(numberofblocks*52);
		$("#holder").width(numberofblocks*52);


		for( var x= 0; x< numberofblocks; x++){
			for(var y = 0; y< numberofblocks ; y++){
				var unit = $("<div class = 'unit'></div>");
				unit.appendTo('#holder');
			}
		}
		$("div.unit").mouseover(function(){
    	$(this).css("background-color", "black");
	});
	});
	$("#clear").click(function(){
		$("div.unit").css("background-color", "blue");
	});

	
});




