$(document).ready(function() {
	
	//populates the page on initial load
	for (var i=1; i<=256; i++) {
		$(".wrapper").append('<div class="squares"></div>');
	};
	$('.squares').mouseenter(function() {
		$(this).addClass("visited");
	});

	//changes div color from black to yellow on mouseover
	$('#chooseSize').click(function() {
		populate();
		$('.squares').mouseenter(function() {
			$(this).addClass("visited");
		});
	});
	
	//changes div color to yellow then fades to white on mouseover
	$('#fadeOut').click(function() {
		populate();
		$('.squares').mouseenter(function() {
			$(this).animate({opacity: 0}).addClass("visited");
		});
	});
	
	//changes div color to random hex - found random color function on Stack Overflow
	$('#random').click(function() {
		populate();
		$('.squares').mouseenter(function() {
			var color='#' + Math.random().toString(16).substring(2, 8);
			$(this).css("background-color",color);
		});
	});
});

//prompts the user for input and populates a new sketchpad based on input
	function populate() {
		var temp="";
		var div='<div class="squares"></div>';
		var input=parseInt(prompt("Please choose the number of squares (min: 2, max: 70):"), 10);
		$('.squares').remove();
		for (var i=1; i<=(input*input); i++) {
			temp+=div;
		};
		$(".wrapper").append(temp);
		var height=640/input;
		$('.squares').css('height',height);
		$('.squares').css('width',height);
	}