jQuery(document).ready(function() {

	'use strict';
	
// ------------------------------- Video Header

	jQuery('#video-header').click(function() {
        this.play();
    });

// ------------------------------- Canvas menu
	
	jQuery('#simple-menu').sidr({
		name: 'sidr',
		renaming: false,
		source: '.menu-main-nav-container',
		displace: false
	});

// ------------------------------- Parallax
	
	// Stellar parallax
	
	if(!Modernizr.touch){
		jQuery.stellar({
			horizontalScrolling: false,
			responsive: true,
			positionProperty: 'position',
			hideDistantElements: false,
		});
	}
	
	// ------------------------------- Gallery Slider
	
	jQuery('.np-thumbnail.gallery-slider').unslider({
		autoplay: true,
		infinite: true,
		nav: false,
		arrows: {
			prev: '<div class="gallery-slider-arrow prev"><i class="fa fa-angle-left"></i></div>',
			next: '<div class="gallery-slider-arrow next"><i class="fa fa-angle-right"></i></div>',
		}
	});
	
	jQuery('.npns-thumbnail.gallery-slider').unslider({
		autoplay: true,
		infinite: true,
		nav: false,
		arrows: {
			prev: '<div class="gallery-slider-arrow prev"><i class="fa fa-angle-left"></i></div>',
			next: '<div class="gallery-slider-arrow next"><i class="fa fa-angle-right"></i></div>',
		}
	});
	
	jQuery('.grid-thumbnail.gallery-slider').unslider({
		autoplay: true,
		infinite: true,
		nav: false,
		arrows: {
			prev: '<div class="gallery-slider-arrow prev"><i class="fa fa-angle-left"></i></div>',
			next: '<div class="gallery-slider-arrow next"><i class="fa fa-angle-right"></i></div>',
		}
	});
	
	jQuery('.gallery-slider-post').unslider({
		autoplay: true,
		infinite: true,
		nav: false,
		arrows: {
			prev: '<div class="gallery-slider-arrow prev"><i class="fa fa-angle-left"></i></div>',
			next: '<div class="gallery-slider-arrow next"><i class="fa fa-angle-right"></i></div>',
		}
	});	
	
	// ------------------------------- Go to Top
	
	jQuery("#experience-top-arrow").hide(); //hide your div initially
	var offset = 300;
	var duration = 500;
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.crunchify-top').fadeIn(duration);
			jQuery("#experience-top-arrow").show(); //hide your div initially
		} else {
			jQuery('.crunchify-top').fadeOut(duration);
		}
	});

	jQuery('.crunchify-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
});

// ------------------------------- Menu Responsive Effects

jQuery( window ).load(function() {
	'use strict';
	if(jQuery("#sidr").length !== 0) {
		jQuery("#sidr .sub-menu").hide();
		jQuery( "#sidr li.menu-item ul.sub-menu" ).each(function() {
			jQuery( this ).after("<div class='lnk-plus'><i class='fa fa-chevron-down'></i></div>");
		});

		jQuery( ".lnk-plus" ).toggle(function() {
			var id1= jQuery( this ).parent().attr("id");
			jQuery("#" + id1 + " ul.sub-menu").show('FadeIn');
			jQuery("#" + id1 + " .menu-item-has-children ul").hide();
			jQuery( this ).html("<i class='fa fa-chevron-up'></i>");
		}, function() {
			var id1= jQuery( this ).parent().attr("id");
			jQuery("#" + id1 + " ul.sub-menu").hide("slow").fadeOut("slow");
			jQuery( this ).html("<i class='fa fa-chevron-down'></i>");
		});
    }
});

// ------------------------------- Masonry

jQuery( window ).load(function() {

	'use strict';
	
	var $portfolio_same	= jQuery('#portfolio-same-box').imagesLoaded( function() {
		
		$portfolio_same.masonry({ itemSelector : '.same-portfolio', columnWidth: '.same-portfolio' });
	
	});
	
	var $portfolio_text = jQuery('#portfolio-text-box').imagesLoaded( function() {
		
		$portfolio_text.masonry({ singleMode: true });
	
	});
	
	var $loop_gridrightsidebar = jQuery('#loop-gridrightsidebar').imagesLoaded( function() {
		
		$loop_gridrightsidebar.masonry({ singleMode: true });
	
	});
	
	var $loop_gridleftsidebar = jQuery('#loop-gridleftsidebar').imagesLoaded( function() {
		
		$loop_gridleftsidebar.masonry({ singleMode: true });
	
	});
	
	var $loop_gridsidebar = jQuery('#loop-grid').imagesLoaded( function() {
		
		$loop_gridsidebar.masonry({ singleMode: true });
	
	});
	
	var $horizontal_sidebar_grid = jQuery('#box-horizontal-sidebar').imagesLoaded( function() {
	
		$horizontal_sidebar_grid.masonry({ itemSelector : '.widget-horizontal', columnWidth: 300, gutter: 25 });
		
	});
});

// ------------------------------- Header Scroll

function init() {
	'use strict';
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();

// ------------------------------- Remove parrallax in small screens

jQuery(function () {
	'use strict';
    var ww = screen.width;
	if (ww < 1025) {
        console.log(ww);
        jQuery(".featured-img-header").removeClass("parallax");
		
		jQuery.stellar({
			verticalScrolling: false,
			horizontalScrolling: false,
		});
	}
});

// ------------------------------- Title effects

jQuery(window).load(function() {
	
	'use strict';
	
// ------------------------------- Animate loader off screen
	
// ------------------------------- Animate.css
	
	// Slider
	jQuery('.experience-title-slider').fadeIn("slow");
	jQuery('.experience-title-slider').addClass("animated fadeInDown").viewportChecker({
        classToAdd: 'animated fadeInDown',
		repeat: true,
    });;
	jQuery('.experience-slider-content').fadeIn("slow");
	jQuery('.experience-slider-content').addClass("animated fadeIn");
	jQuery('.experience-button-slider').fadeIn("slow");
	jQuery('.experience-button-slider').addClass("animated fadeInUp");
	
	// Page header
	jQuery('h2.title-page-header').fadeIn("slow");
	jQuery('h2.title-page-header').addClass("animated fadeInDown");
	jQuery('p.text-page-header').fadeIn("slow");
	jQuery('p.text-page-header').addClass("animated fadeInUp");
	
});