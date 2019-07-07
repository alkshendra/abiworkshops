jQuery(document).ready(function() {
	
	'use strict';
	
	// Testimonials
	jQuery('.widget-slider').unslider({
		autoplay: false,
		arrows: false,
	});

	
	// Slider
	jQuery('.widget-slider-container').unslider({
		autoplay: true,
		infinite: true,
		arrows: {
			prev: '<div class="slider-widget-arrow prev"><i class="fa fa-angle-left"></i></div>',
			next: '<div class="slider-widget-arrow next"><i class="fa fa-angle-right"></i></div>',
		}
	});	

});