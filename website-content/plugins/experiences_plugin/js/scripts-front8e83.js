jQuery(document).ready(function() {
	
	'use strict';
	
	// ------------------------------- Like Button
 
	jQuery(".post-like a").click(function(){
	
		var heart = jQuery(this);
	
		var post_id = heart.data("post_id");
		
		jQuery.ajax({
			type: "post",
			url: ajax_var.url,
			data: "action=post-like&nonce="+ajax_var.nonce+"&post_like=&post_id="+post_id,
			success: function(count){
				if(count != "already")
				{
					heart.addClass("voted");
					heart.siblings(".count").text(count);
				}
			}
		});
		
		return false;
	})
	
	// ------------------------------- Max people alert
	
		jQuery("#number-people-exp").change(function(){

			var max_people = jQuery(this).attr('max');

			var max_people_value = jQuery(this).val();
			
			if ( +max_people_value > max_people ) {
				alert('Please enter a value between 1 and '+max_people);
				
				jQuery(this).attr('value', max_people);
			};
		});
 
})

jQuery(window).load(function() {
	
	'use strict';
	
	// ------------------------------- Animate.css
	
	//Page header
	jQuery('.title-page-header').fadeIn("slow");
	jQuery('.title-page-header').addClass("animated fadeInDown");
	jQuery('.text-page-header').fadeIn("slow");
	jQuery('.text-page-header').addClass("animated fadeInUp");
	
	//Experiences
	jQuery('.title-single-experience-header').fadeIn("slow");
	jQuery('.title-single-experience-header').addClass("animated fadeInDown");
	jQuery('.post-like-title-exp-single').fadeIn("slow");
	jQuery('.post-like-title-exp-single').addClass("animated fadeInDown");
	jQuery('.text-single-experience-header').fadeIn("slow");
	jQuery('.text-single-experience-header').addClass("animated fadeInUp");
	
	//Author & client
	jQuery('.title-author-experience-header').fadeIn("slow");
	jQuery('.title-author-experience-header').addClass("animated fadeInDown");
	jQuery('.text-author-experience-header').fadeIn("slow");
	jQuery('.text-author-experience-header').addClass("animated fadeInUp");
	jQuery('.title-client-experience-header').fadeIn("slow");
	jQuery('.title-client-experience-header').addClass("animated fadeInDown");
	jQuery('.text-client-experience-header').fadeIn("slow");
	jQuery('.text-client-experience-header').addClass("animated fadeInUp");
	
});