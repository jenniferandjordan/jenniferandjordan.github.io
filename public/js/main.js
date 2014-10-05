var intro = $('#intro').height();
var wh = $(window).height();

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
	$(document).bind('scroll', scrollEvents);
});

function init() {
	$('header a').click(function(e) {
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

function scrollEvents() {
	var st = $(document).scrollTop();

	fader(st);
	changeNavHeight(st);
	showTimelineBlock(st);
}

function fader(st) {
	var blurred = $('.blurred'),
			elView, opacity;

	blurred.each(function() {
		elView = wh - ($(this).offset().top - st + 400);

		if (elView > 0) {
			opacity = 1 / (wh + $(this).height()) * elView * 2;


			if (opacity < 1) $(this).css('opacity', opacity);
		}
	});
}

function changeNavHeight(st) {
	var percent = Number(((intro - st * 2) / intro).toFixed(2));

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

function showTimelineBlock(st) {
	$('.timeline-block').each(function(index) {
		if ($(this).offset().top <= (st + wh*.8) && 
			$(this).find('.timeline-content').hasClass('is-hidden') ) {

			$(this).find('.timeline-circle').removeClass('is-hidden').addClass('bounce');
			$(this).find('.timeline-content').removeClass('is-hidden').addClass('bounce');
		}
	});
}


