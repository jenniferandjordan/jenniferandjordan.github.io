$(window).load(function() {
	var intro = $('#intro').height();

	// onload animations
	$('#intro').animate({
		'opacity': 1
	}, 700);

	window.setTimeout(function() {
		$('body').addClass('loaded');
	}, 1000);

	// scrolling functions
	$(document).scroll(function() {
		var st = $(window).scrollTop();
		var perc = ((intro - st) / intro).toFixed(2);

		if (st > 0) {
			$('#main').css({
				'-ms-transform': 'scale('+ perc +')',
				'-webkit-transform': 'scale('+ perc +')',
				'transform': 'scale('+ perc +')',
				'opacity': perc
			});
		}

		if (st > (intro - 90)) {
			$('header').addClass('small');
		} else {
			$('header').removeClass('small');
		}
	});

	// init functions
	init();
});

function init() {
	$('.nav-link').click(function(e) {
		e.preventDefault();
		var target = $(e.target).attr('href');
		var targetY = $(target).offset().top - 50;

		$('html, body').animate({
			'scrollTop': targetY
		}, 500);

		return false;
	});
}
