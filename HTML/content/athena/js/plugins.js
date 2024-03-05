
// Start Window Load Function
$(window).on('load', function() {

    'use strict';

    //*********************************************
    //  REVOLUTION SLIDER FOR HOME
    //*********************************************

       

});





    (function($, window, document, undefined) {
        'use strict';
        // init cubeportfolio
        $('#portfolio-items').cubeportfolio({
            mediaQueries: [{
                width: 992,
                cols: 3,
            }, {
                width: 640,
                cols: 2,
            }, {
                width: 480,
                cols: 1,
            }, {
                width: 320,
                cols: 1
            }],
            filters: '.filter-tags',
            defaultFilter: '*',
            layoutMode: 'masonry',
            gridAdjustment: 'responsive',
            gapHorizontal: 15,
            gapVertical: 15,
            caption: 'none',
            animationType: 'quicksand',
            displayType: 'none',
            displayTypeSpeed: 60,
        });

        //Get .active class for filters
        $(".cbp-filter-item-active").addClass("active");
        $("[data-filter]").on("click", function(){
            $("[data-filter]").removeClass("active");
            $(".cbp-filter-item-active").addClass("active");
        });

    })(jQuery, window, document);
