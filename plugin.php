<?php
/**
 * Plugin Name: YIT Debug Bar
 * Plugin URI:
 * Description: A simple debug bar for YIT Themes
 * Version: 0.1
 * Author: Giustino Borzacchiello
 * Author URI: http://giustino.borzacchiello.it
 *
 */
add_action('admin_bar_menu', 'yit_debug_bar_menu', 1001);

function yit_debug_bar_menu($wp_admin_bar)
{
    /**
     * @var $wp_admin_bar WP_Admin_Bar
     */
    $wp_admin_bar->add_menu(array(
        'id' => 'yit-debug-bar',
        'parent' => 'top-secondary',
        'title' => apply_filters('yit_debug_bar_title', __('YIT Debug', 'yit-debug-bar')),
        'href' => FALSE,
    ));

    $wp_admin_bar->add_menu(array(
        'parent' => 'yit-debug-bar',
        'id' => 'yit-delete-cache',
        'title' => apply_filters('yit_debug_bar_delete_cache', __('Delete cache', 'yit-debug-bar')),
        'href' => '#',
    ));

    $wp_admin_bar->add_menu(array(
        'parent' => 'yit-debug-bar',
        'id' => 'yit-reset-theme-options',
        'title' => apply_filters('yit_debug_bar_reset_theme_options', __('Reset Theme Options', 'yit-debug-bar')),
        'href' => '#',
    ));

    $wp_admin_bar->add_menu(array(
        'parent' => 'yit-debug-bar',
        'id' => 'yit-delete-resize-images',
        'title' => apply_filters('yit_debug_bar_delete_resize_image', __('Delete resized images', 'yit-debug-bar')),
        'href' => '#',
    ));
}

add_action('wp_head', 'yit_debug_bar_ajaxurl', 0);
function yit_debug_bar_ajaxurl()
{
    ?>
    <script>
        var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
    </script>
<?php
}

add_action('admin_enqueue_scripts', 'yit_debug_bar_register_script');
add_action('wp_enqueue_scripts', 'yit_debug_bar_register_script');
function yit_debug_bar_register_script()
{
    wp_enqueue_script('yitdebug_admin_js', plugins_url('yit-debug-bar/admin.js'));
}
