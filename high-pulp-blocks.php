<?php
/**
 * Plugin Name:       High Pulp Blocks
 * Description:       Add some extra pulp to your site with these 100% original blocks.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       high-pulp-blocks
 *
 * @package Mc
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function mc_high_pulp_blocks_block_init() {
	register_block_type( __DIR__ . '/build/blocks/high-pulp-blocks' );
	register_block_type( __DIR__ . '/build/blocks/testimonial' );
	register_block_type( __DIR__ . '/build/filters/border-control' );
	register_block_type( __DIR__ . '/build/blocks/staff-list' );
	register_block_type( __DIR__ . '/build/blocks/staff-directory' );
	register_block_type( __DIR__ . '/build/blocks/book-block' );
	register_block_type( __DIR__ . '/build/blocks/submit-review' );
	register_block_type( __DIR__ . '/build/blocks/react-app' );

//add api client for submit-review block
	wp_enqueue_script( 'wp-api' );
}
add_action( 'init', 'mc_high_pulp_blocks_block_init' );



