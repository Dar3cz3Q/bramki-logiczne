jQuery(function ($) {
	$.scrollTo(0);

	$('#name-or-link').click(function () {
		$.scrollTo($('body'), 500);
	});
	$('#name-and-link').click(function () {
		$.scrollTo($('#and'), 500);
	});
	$('#name-not-link').click(function () {
		$.scrollTo($('#not'), 500);
	});
	$('#name-nor-link').click(function () {
		$.scrollTo($('#nor'), 500);
	});
	$('#name-nand-link').click(function () {
		$.scrollTo($('#nand'), 500);
	});
	$('#name-xor-link').click(function () {
		$.scrollTo($('#xor'), 500);
	});
	$('.scroolup').click(function () {
		$.scrollTo($('body'), 1000);
	});
});
$(window).scroll(function () {
	if ($(this).scrollTop() > 300) $('.scroolup').fadeIn();
	else $('.scroolup').fadeOut();

});