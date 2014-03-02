var front = (function ($) {
    "use strict";

    var ui = {
        init : function () {
            $('html').removeClass('no-js');
        }
    };

    return ui;

})(jQuery)

$(document).ready(front.init);
//$(window).load(function() { front.init() });
