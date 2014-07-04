$(window).load(function() {
	var intro = $('#intro').height();

	$('#intro').animate({
		'opacity': 1
	}, 700);

	window.setTimeout(function() {
		$('body').addClass('loaded');
	}, 1000);

	$(document).scroll(function() {
		var st = $(window).scrollTop();
		var op = 1 - (st / intro * 2).toFixed(3);

		if (st > 0) {
			
		}
		
		// if (op <= .7) op = .7;
		// $('#main').css({
		// 	'opacity': 1 - (st / intro * 2).toFixed(3),
		// 	'-ms-transform': 'scale('+ op +')',
		// 	'-webkit-transform': 'scale('+ op +')',
		// 	'transform': 'scale('+ op +')',
		// })
	});
});