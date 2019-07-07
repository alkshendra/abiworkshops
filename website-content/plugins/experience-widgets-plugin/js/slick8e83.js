jQuery(document).ready(function() {
	
	'use strict';
	
	// Team Carousel
	
	jQuery('.team-carousel-widget').slick({
		slidesToShow: 3,
		prevArrow: '<button type="button" class="team_carousel_leftarrow"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="team_carousel_rightarrow"><i class="fa fa-angle-right"></i></button>',
		responsive: [
			{
				breakpoint: 514,
				settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow:1
				}
			}
		]
	});

	// Show three experiences
	
	jQuery('.exp-w-container').slick({
		dots: true,
		arrows:false,
		slidesToShow:1,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					dots: false
				}
			},
			{
				breakpoint: 514,
				settings: {
				arrows: false,
				dots: false
				}
			}
		]
	});
	
	// Brands Carousel
	
	jQuery('.brands-carousel-widget').slick({
		slidesToShow: 4,
		prevArrow: '<button type="button" class="brands_carousel_leftarrow"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="brands_carousel_rightarrow"><i class="fa fa-angle-right"></i></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
				}
			},
			{
				breakpoint: 514,
				settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
				}
			}
		]
	});
	
	// Experiences types Carousel
	
	jQuery('.experiences-type-container').slick({
		slidesToShow: 4,
		prevArrow: '<button type="button" class="experiences-type-leftarrow"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="experiences-type-rightarrow"><i class="fa fa-angle-right"></i></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
				}
			},
			{
				breakpoint: 514,
				settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
				}
			}
		]
	});
	
	// Portfolio Carousel
	jQuery('.portfolio-widget-container').slick({
		slidesToShow: 3,
		prevArrow: '<button type="button" class="two-portfolio-leftarrow"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="two-portfolio-rightarrow"><i class="fa fa-angle-right"></i></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
				arrows: true,
				centerMode: true,
				slidesToShow: 2
				}
			},
			{
				breakpoint: 514,
				settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
				}
			}
		],
	});

	// Reviews Carousel
	jQuery('.experience-reviews-container').slick({
		slidesToShow: 1,
		prevArrow: '<button type="button" class="last-reviews-leftarrow"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="last-reviews-rightarrow"><i class="fa fa-angle-right"></i></button>',
	});

	// Reviews Carousel
	jQuery('.testimonials-slide').slick({
		slidesToShow: 1,
		prevArrow: '<button type="button" class="last-reviews-leftarrow"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="last-reviews-rightarrow"><i class="fa fa-angle-right"></i></button>',
		// vertical: true,
		draggable: true
	});
});