$( document ).ready( function () {
    $( function ()
        {
            $( window ).scroll( function ()
            {
                if ( $( this ).scrollTop() >= 20 ) {
                    $( 'nav' ).addClass( 'stickytop' );
                }
                else {
                    $( 'nav' ).removeClass( 'stickytop' );
                }
            } );
        } );
    // $(".tab_content").removeClass("tab_content");
    $( ".tab-announcements" ).show();
    // $( ".tab-events" ).hide();
    // $( ".tab-posts" ).hide();
    $( "#showannc" ).addClass( "active" );
    $( "#showannc" ).click( function () {
        $( "#showannc" ).addClass( "active" );
        $( "#showevents" ).removeClass( "active" );
        $( "#showposts" ).removeClass( "active" );
        $( ".tab-announcements" ).show();
        $( ".tab-events" ).hide();
        $( ".tab-posts" ).hide();
    } );
    $( "#showevents" ).click( function () {
        $( "#showannc" ).removeClass( "active" );
        $( "#showevents" ).addClass( "active" );
        $( "#showposts" ).removeClass( "active" );
        $( ".tab-announcements" ).hide();
        $( ".tab-events" ).show();
        $( ".tab-posts" ).hide();
    } );
    $( "#showposts" ).click( function () {
        $( "#showannc" ).removeClass( "active" );
        $( "#showevents" ).removeClass( "active" );
        $( "#showposts" ).addClass( "active" );
        $( ".tab-announcements" ).hide();
        $( ".tab-events" ).hide();
        $( ".tab-posts" ).show();
    } );
} );