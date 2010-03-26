jQuery(document).ready(function() {
	// hide color input field and show ColorPicker window
	jQuery('#watermark_text_color_hash').hide();
	jQuery('input[name="watermark_text[color]"]').hide();
	jQuery('.colorSelector').show();
	jQuery('.colorSelector').ColorPicker({
		color: jQuery('input[name="watermark_text[color]"]').val(),
		onSubmit: function(hsb, hex, rgb, el) {
			jQuery('.colorSelector div').css('background-color', '#' + hex);
			jQuery('input[name="watermark_text[color]"]').val(hex);
			jQuery(el).ColorPickerHide();
		}	
	});
});