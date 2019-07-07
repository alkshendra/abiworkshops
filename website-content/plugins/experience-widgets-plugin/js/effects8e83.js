jQuery(window).load(function() {
	
	'use strict';
	
// ------------------------------- Animate.css

	jQuery('.fadein-animated').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
		offset: 100,
    });
	
	jQuery('.fadeinup-animated').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
		offset: 100,
    });

	jQuery('.fadeindown-animated').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInDown',
		offset: 100,
    });
	
	jQuery('.fadeinleft-animated').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
		offset: 100,
    });
	
	jQuery('.fadeinright-animated').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
		offset: 100,
    });

});