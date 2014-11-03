$(document).ready(function() {
	
	//populates the page on initial load
	for (var i=1; i<=256; i++) {
		$(".wrapper").append('<div class="squares"></div>');
	};
	$('.squares').mouseenter(function() {
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
		$('.squares').mouseenter(function() {
			$(this).animate({opacity: 0}).addClass("visited");
		});
	});
	
	$('#random').click(function() {
		populate();
		$('.squares').mouseenter(function() {
			var color='#' + Math.random().toString(16).substring(2, 8);
			$(this).css("background-color",color);
		});
	});
	
	$('#harder').click(function() {
		populate();
		$('.squares').mouseenter(function() {
			$(this).animate({opacity:0.9});
		});
	});	
});

	function populate() {
		
		var input=parseInt(prompt("Please choose the number of squares (min:2, max:70):"), 10);
		var temp="";
		var div='<div class="squares"></div>';
		$('.squares').remove();
		$('.visited').remove();
		for (var i=1; i<=(input*input); i++) {
			temp+=div;
		};
		$(".wrapper").append(temp);
		var height=640/input;
		$('.squares').css('height',height);
		$('.squares').css('width',height);
	}