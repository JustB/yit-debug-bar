/**
 * YIT debug bar
 * User: Giustino Borzacchiello - giustinob[at]gmail[dot]com
 * Date: 20/07/13
 * Time: 0.12
 */
jQuery(document).ready(function ($) {
    "use strict";
    function yit_reset_call(e, action, msg) {
        e.preventDefault();

        var data = {
            action: action
        };

        console.log(msg);

        $.post(ajaxurl, data, function () {
            console.log('SUCCESS: ' + msg);
        });
    }

    $('#wp-admin-bar-yit-reset-theme-options > a').click(function (e) {
        yit_reset_call(e, 'reset_theme_options', 'reset theme options');
    });

    $('#wp-admin-bar-yit-delete-cache > a').click(function (e) {
        yit_reset_call(e, 'delete_cache', 'delete cache');
    });

    $('#wp-admin-bar-yit-delete-resize-images > a').click(function (e) {
        yit_reset_call(e, 'delete_resized_images', 'delete resized images');
    });


});