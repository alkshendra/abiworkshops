jQuery(function ($) {
	
	'use strict';

	var $container = $('.experiences_isotope'); //The ID for the list with all the blog posts
	$container.isotope({ //Isotope options, 'item' matches the class in the PHP
		itemSelector : '.item_experience', 
  		layoutMode : 'masonry'
	});

	//Add the class selected to the item that is clicked, and remove from the others
	var $optionSets = $('.isotope_filters'),
	$optionLinks = $optionSets.find('a');

	$optionLinks.click(function(){
	var $this = $(this);
	// don't proceed if already selected
	if ( $this.hasClass('selected') ) {
	  return false;
	}
	var $optionSet = $this.parents('.isotope_filters');
	$optionSets.find('.selected').removeClass('selected');
	$this.addClass('selected');

	//When an item is clicked, sort the items.
	 var selector = $(this).attr('data-filter');
	$container.isotope({ filter: selector });

	return false;
	});

});