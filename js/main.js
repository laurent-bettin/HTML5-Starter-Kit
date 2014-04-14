var front = (function ($) {
    "use strict";

    var ui = {
        init: function () {
            var _this = this;
            $('html').removeClass('no-js');
        }
    };

    return ui;

})(jQuery)

$(document).ready(front.init);
//$(window).load(function() { front.init() });
