var intro = $('#intro').height();

$(window).load(function() {
	// onload animations
	$('#intro').animate({
		'opacity': 1
	}, 700);

	window.setTimeout(function() {
		$('body').addClass('loaded');
	}, 1000);


	// init functions
	init();
	$(document).bind('scroll', fader);
	$(document).bind('scroll', changeNavHeight);
});

function init() {
	$('.nav-link').click(function(e) {
		e.preventDefault();
		var target = $(e.target).attr('href');
		// var targetY = $(target).offset().top + 50;

		var sectionClass = $(e.target).attr('href');
		if ($(sectionClass).attr('class') == 'bg-image-bleed') { 
			var targetY = $(target).offset().top + 50;
		} else {
			var targetY = $(target).offset().top - 50;
		}



		$('html, body').animate({
			'scrollTop': targetY
		}, 500);

		return false;
	});
}

function fader() {
	var blurred = $('.blurred'),
			wh = $(window).height(),
			st = $(document).scrollTop(),
			elView, opacity;

	blurred.each(function() {
		elView = wh - ($(this).offset().top - st + 200);

		if (elView > 0) {
			opacity = 1 / (wh + $(this).height()) * elView * 2.1;


			if (opacity < 1) $(this).css('opacity', opacity);
		}
	});
}

function changeNavHeight() {
	var st = $(document).scrollTop(),
			percent = Number(((intro - st * 2) / intro).toFixed(2));

	// set opacity of hero text
	if (st > 0) {
		$('#main').css({ 'opacity': percent });
	} else {
		$('#main').css({ 'opacity': 1 });
	}

	// nav height
	if (st > (intro - 90)) {
		$('header').addClass('small');
	} else {
		$('header').removeClass('small');
	}
}
