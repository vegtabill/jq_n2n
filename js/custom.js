jQuery(document).ready(function(){

	jQuery('#no-script').remove();

	jQuery('#celebs tbody tr:even').addClass('zebra');

	jQuery('<input type="button" id="toggleButton" value="Hide" />').insertAfter('#disclaimer');

	jQuery('#toggleButton').click(function(){
		jQuery('#disclaimer').slideToggle('slow', function(){
			if(jQuery('#disclaimer').css('display') == 'block'){
				jQuery('#toggleButton').val("Hide");
			} else {
				jQuery('#toggleButton').val("Show");
			}
		});
	});

	jQuery('#celebs tbody tr').click(function(){
		jQuery(this).toggleClass('zebraHover');
	});

	jQuery('.spoiler').hide();
	jQuery('<span class="revealer">Tell me!</span>').insertBefore('.spoiler');
	jQuery('.revealer').click(function(){
		jQuery(this).hide();
		jQuery(this).next().fadeIn();
	});

});