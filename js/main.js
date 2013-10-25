var front = {};

(function (context) {
	"use strict";

	var ui = {
		init : function () {
			$('html').removeClass('no-js');
		}
	};

	context.ui = ui;

})(front)

$(document).ready(front.ui.init);
//$(window).load(function() { front.ui.init() });
