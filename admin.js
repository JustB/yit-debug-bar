/**
 * Created with JetBrains PhpStorm.
 * User: Just
 * Date: 20/07/13
 * Time: 0.12
 * To change this template use File | Settings | File Templates.
 */
jQuery(document).ready(function ($) {
    "use strict";
    $('#wp-admin-bar-yit-reset-theme-options > a').click(function (e) {
        e.preventDefault();

        var data = {
            action: 'reset_theme_options'
        };

        console.log('Deleting theme options...');

        $.post(ajaxurl, data, function () {
            console.log('Successfully reset Theme Options');
        });
    });

    $('#wp-admin-bar-yit-delete-cache > a').click(function (e) {
        e.preventDefault();

        var data = {
            action: 'delete_cache',
            die: 1
        };

        console.log('Deleting cache...');

        $.post(ajaxurl, data, function () {
            console.log('Successfully deleted cache');
        });
    });

    $('#wp-admin-bar-yit-delete-resize-images > a').click(function (e) {
        e.preventDefault();

        var data = {
            action: 'delete_resized_images'
        };

        console.log('Deleting resized images...');

        $.post(ajaxurl, data, function () {
            console.log('Successfully deleted resized images');
        });
    });


});