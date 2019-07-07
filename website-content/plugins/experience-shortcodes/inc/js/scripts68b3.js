jQuery(document).ready(function() {
	
	'use strict';

// ------------------- PRETTY PHOTO	

	jQuery("a[data-rel^='slider']").prettyPhoto({
	
		theme: 'dark_square', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
		social_tools: false,
	
	});

// ------------------- SLICK CAROUSEL	
	
	jQuery('.experience_carousel_shortcode').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="experience_carousel_leftarrow"><i class="fa fa-angle-left"></i></i></button>',
		nextArrow: '<button type="button" class="experience_carousel_rightarrow"><i class="fa fa-angle-right"></i></i></button>',
		responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
	});

// ------------------- SLIDER

	jQuery('.experience_slider_shortcode').unslider({
		arrows: {
			//  Unslider default behaviour
			prev: '<a class="unslider-arrow prev"><i class="fa fa-angle-left"></i></a>',
			next: '<a class="unslider-arrow next"><i class="fa fa-angle-right"></i></a>',
		},
		autoplay: true,
		infinite: true,
	});
});