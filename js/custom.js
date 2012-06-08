jQuery(document).ready(function(){

	jQuery('#no-script').remove();

	jQuery('#celebs tbody tr:even').addClass('zebra');

	jQuery('<input type="button" id="toggleButton" value="Hide" />').insertAfter('#disclaimer');

	jQuery('#disclaimer').animate({backgroundColor: '#ff9f5f'}, 2000);

	jQuery('#bio > div').hide();
	jQuery('#bio > div:first').show();

	jQuery('#toggleButton').click(function(){
		jQuery('#disclaimer').animate({
			opacity: 'toggle'
			, height: 'toggle'
		}, 'slow', function(){
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

	jQuery('#navigation li').hover(function(){
		jQuery(this).animate({paddingLeft: '+=15px'}, 200);
	}, function(){
		jQuery(this).animate({paddingLeft: '-=15px'}, 200);
	});

	jQuery('p:first').toggle(function(){
		jQuery(this).animate({height: '+=150px'}, 1000, 'linear');
	}, function(){
		jQuery(this).animate({height: '-=150px'}, 1000, 'swing');
	});

	jQuery('#bio h3').click(function(){
		jQuery(this).next().animate({
			height: 'toggle'
		}, 'slow', 'easeOutBounce');
	});

});
