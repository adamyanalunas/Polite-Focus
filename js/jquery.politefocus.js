(function ($, undefined) {
	$.fn.politeFocus = function () {
		if(document.activeElement.tagName.toLowerCase() === 'body') {
			this.focus();
		}
	};
})(jQuery);