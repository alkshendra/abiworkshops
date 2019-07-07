jQuery(document).ready(function() {
	
	'use strict';
	
	jQuery(".ready.fadeindown-animated").addClass("hidden").viewportChecker({
		classToAdd: "visible animated fadeInDown",
		callbackFunction: function countup_numbers() {
	
			jQuery('.count').each(function () {
				var jQuerythis = jQuery(this);
				jQuery({ Counter: 0 }).animate({ Counter: jQuerythis.text() }, {
					duration: 3000,
					easing: 'swing',
					step: function () {
						jQuerythis.text(Math.ceil(this.Counter));
					}
				})
			})
	
		},
	});
	
	jQuery(".ready.fadein-animated").addClass("hidden").viewportChecker({
		classToAdd: "visible animated fadeIn",
		callbackFunction: function countup_numbers() {
	
			jQuery('.count').each(function () {
				var jQuerythis = jQuery(this);
				jQuery({ Counter: 0 }).animate({ Counter: jQuerythis.text() }, {
					duration: 3000,
					easing: 'swing',
					step: function () {
						jQuerythis.text(Math.ceil(this.Counter));
					}
				})
			})
	
		},
	});
	
	jQuery(".ready.fadeinup-animated").addClass("hidden").viewportChecker({
		classToAdd: "visible animated fadeInUp",
		callbackFunction: function countup_numbers() {
	
			jQuery('.count').each(function () {
				var jQuerythis = jQuery(this);
				jQuery({ Counter: 0 }).animate({ Counter: jQuerythis.text() }, {
					duration: 3000,
					easing: 'swing',
					step: function () {
						jQuerythis.text(Math.ceil(this.Counter));
					}
				})
			})
	
		},
	});
	
	jQuery(".ready.fadeinleft-animated").addClass("hidden").viewportChecker({
		classToAdd: "visible animated fadeInLeft",
		callbackFunction: function countup_numbers() {
	
			jQuery('.count').each(function () {
				var jQuerythis = jQuery(this);
				jQuery({ Counter: 0 }).animate({ Counter: jQuerythis.text() }, {
					duration: 3000,
					easing: 'swing',
					step: function () {
						jQuerythis.text(Math.ceil(this.Counter));
					}
				})
			})
	
		},
	});
	
	jQuery(".ready.fadeinright-animated").addClass("hidden").viewportChecker({
		classToAdd: "visible animated fadeInRight",
		callbackFunction: function countup_numbers() {
	
			jQuery('.count').each(function () {
				var jQuerythis = jQuery(this);
				jQuery({ Counter: 0 }).animate({ Counter: jQuerythis.text() }, {
					duration: 3000,
					easing: 'swing',
					step: function () {
						jQuerythis.text(Math.ceil(this.Counter));
					}
				})
			})
	
		},
	});
	
});