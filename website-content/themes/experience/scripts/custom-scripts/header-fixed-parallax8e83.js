jQuery(document).ready(function() {

	'use strict';
	
	// Relative header Parallax
	
	jQuery(function(){
		var parallax = document.querySelectorAll(".parallax"),
		speed = 0.5;
		window.onscroll = function(){
			[].slice.call(parallax).forEach(function(el,i){
				var windowYOffset = window.pageYOffset,
				elBackgrounPos = "0 " + (windowYOffset * speed) + "px";
  
				el.style.backgroundPosition = elBackgrounPos;

			});
		};

	});
	
});