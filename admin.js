/**
 * Created with JetBrains PhpStorm.
 * User: Just
 * Date: 20/07/13
 * Time: 0.12
 * To change this template use File | Settings | File Templates.
 */
jQuery( document ).ready( function( $ ) {

    $( '#wp-admin-bar-yit-reset-theme-options > a' ).click( function( e ) {
        e.preventDefault();
        $('#add-items-ajax-loading-2').css('visibility', 'visible');

        var data = {
            action : 'reset_theme_options'
        };

        console.log( 'Deleting theme options...' );

        $.post( ajaxurl, data, function( response ) {
            $('#add-items-ajax-loading-2').hide();
            $( 'body' ).append( response );
            $( '.messages-global').css( {
                'position' : 'fixed',
                'top' : '50%',
                'left': '37%',
                'z-index' : '9999',
                'padding' : '30px'
            } );

            $( '.messages-global' ).fadeIn().delay( 3000 ).fadeOut();
        } );
    } );
} );