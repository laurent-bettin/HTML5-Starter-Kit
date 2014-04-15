jQuery.noConflict();

var front = (function ($) {
    "use strict";

    var ui = {
        init: function () {
            var _this = this;
            $('html').removeClass('no-js');
        }
    };

    return {
        ui: ui
    };

})(jQuery);

jQuery(document).ready(front.ui.init);
//$(window).load(function() { front.init() });
