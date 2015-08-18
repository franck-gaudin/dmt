(function($) {

    /* Show Menu and Push the content on left */
    var showMenu = document.getElementById( 'menu--buttonShow' ),
        menuLeft = document.getElementById( 'menu--items' ),
        body = document.body;

    showMenu.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( body, 'push' );
        classie.toggle( menuLeft, 'menu--open' );
    };

    /* Show Search input*/
    var showSearch = document.getElementById( 'search--buttonShow'),
        searchForm = document.getElementById( 'search--form'),
        overlay = document.getElementById( 'overlay'),
        showSearchForm = function(){classie.toggle( searchForm, 'show' );};

    showSearch.onclick = function() {
        classie.toggle( body, 'no-scroll' );
        classie.toggle( overlay, 'show' );
        setTimeout(showSearchForm, 300);
    };

})(jQuery);