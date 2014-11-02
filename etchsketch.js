$(document).ready(function() {
	for (var i=1; i<=256; i++) {
		$(".wrapper").append('<div class="squares"></div>');
	};
	$('div div').mouseenter(function() {
		$(this).addClass("visited");
	});
	
	$('#chooseSize').click(function() {
		populate();
		$('div div').mouseenter(function() {
			$(this).addClass("visited");
		});
	});
	
	$('#fadeOut').click(function() {
		populate();
		$('div div').mouseenter(function() {
			$(this).animate({opacity: 0});
			$(this).addClass("visited");
		});
	});
	
	$('#random').click(function() {
		populate();
		$('div div').mouseenter(function() {
			var color='#' + Math.random().toString(16).substring(2, 8);
			$(this).css("background-color",color);
		});
	});
	
	$('#harder').click(function() {
		populate();
		$('div div').mouseenter(function() {
			$(this).addClass("visited");
		});
	});
	
});

	function populate() {
		$('.squares').remove();
		$('.visited').remove();
		var input=parseInt(prompt("Please choose the number of squares (min:2, max:70):"), 10);
		var temp="";
		var div='<div class="squares"></div>';
		for (var i=1; i<=(input*input); i++) {
			temp+=div;
		};
		$(".wrapper").append(temp);
		var height=640/input;
		$('.squares').css('height',height);
		$('.squares').css('width',height);
	}