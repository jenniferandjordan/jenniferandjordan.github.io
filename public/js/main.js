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
		var perc = ((intro - st) / intro).toFixed(2);
		console.log(perc);

		if (st > 0) {
			$('#main').css({
				'-ms-transform': 'scale('+ perc +')',
				'-webkit-transform': 'scale('+ perc +')',
				'transform': 'scale('+ perc +')',
				'opacity': perc
			});
		}
		
		// if (op <= .7) op = .7;
		// $('#main').css({
		// 	'opacity': 1 - (st / intro * 2).toFixed(3),
		// 	'-ms-transform': 'scale('+ op +')',
		// 	'-webkit-transform': 'scale('+ op +')',
		// 	'transform': 'scale('+ op +')',
		// })
	});

	$('.nav-link').click(function(e) {
		e.preventDefault();
		var target = $(e.target).attr('href');
		var targetY = $(target).offset().top - 90;

		$('html, body').animate({
			'scrollTop': targetY
		}, 500);

		return false;
	});
});