$(document).ready(function () {
	$('.slider').slick({
		dots: true, 
		speed: 1000, 
		autoplay: true, 
		autoplaySpeed: 1000, 
		pauseOnHover: true, 
		pauseOnDotsHover: true, 
		draggable: false, 
		swipe: true, 
		fade: true, 
		infinite: false,
	});
	$('.slider-produkt').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		infinite: false,
		speed: 1000,
		draggable: false,
	});
});