// Small global functions can go here.
// Custom scripts can go in their own file.
// Globally used scripts are loaded via layout.twig
// Page specific scripts are loaded via {% block footer_scripts %}

var fitVidInit = function(){
    $('.container').fitVids();
};

var smoothScrollInit = function(){
    $('a').smoothScroll();
};

var matchHeightInit = function(){
    $('.js-match-height').matchHeight();
};

// init within document.ready
(function($) {

    fitVidInit();
    matchHeightInit();
    smoothScrollInit();
    analyticsSourcing();

})(jQuery);
