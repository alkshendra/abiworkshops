jQuery(document).ready(function(){
	
	'use strict';

	// -------------------- Client: Profile Uploader button

	var experience_user_profile_file_frame;
 
	jQuery('.exp_user_profile_image').on('click', function( event ){
 
		event.preventDefault();
	 
		if ( experience_user_profile_file_frame ) {
		  experience_user_profile_file_frame.open();
		  return;
		}

		experience_user_profile_file_frame = wp.media.frames.experience_user_profile_file_frame = wp.media({
		  title: jQuery( this ).data( 'uploader_title' ),
		  button: {
			text: jQuery( this ).data( 'uploader_button_text' ),
		  },
		  multiple: false  // Set to true to allow multiple files to be selected
		});

		experience_user_profile_file_frame.on( 'select', function() {
		  var attachment = experience_user_profile_file_frame.state().get('selection').first();
		  jQuery('.exp_user_profile_image_input').val(attachment.attributes.url);
		});
	 
		experience_user_profile_file_frame.open();
	});
	
	// -------------------- Client: Header Uploader button

	var experience_user_header_file_frame;
 
	jQuery('.exp-header-user-image').on('click', function( event ){
 
		event.preventDefault();
	 
		if ( experience_user_header_file_frame ) {
		  experience_user_header_file_frame.open();
		  return;
		}

		experience_user_header_file_frame = wp.media.frames.experience_user_header_file_frame = wp.media({
		  title: jQuery( this ).data( 'uploader_title' ),
		  button: {
			text: jQuery( this ).data( 'uploader_button_text' ),
		  },
		  multiple: false  // Set to true to allow multiple files to be selected
		});

		experience_user_header_file_frame.on( 'select', function() {
		  var attachment = experience_user_header_file_frame.state().get('selection').first();
		  jQuery('.exp_user_meta_image_input').val(attachment.attributes.url);
		});
	 
		experience_user_header_file_frame.open();
	});
});