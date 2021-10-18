(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.fixed-top',
        offset: 60
    });

    $('#mainNav').affix({
        offset: {
            top: 200
        }
    });
    
    new WOW().init();
    
    $('a.nav-link').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);