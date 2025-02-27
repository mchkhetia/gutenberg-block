<?php
function mc_add_borders( $block_content = '', $block = [] ) {
	// TODO: create wrapper
	$defaults= [
		'bcBorderStyle'=> 'none',
		'bcPadding'=> '10px',

	];

	$attrs = array_merge($defaults, $block['attrs']);


	//only do this if border style is set
	if($attrs['bcBorderStyle'] !== 'none'){
		$divStyles = "
		'borderStyle': {$attrs['bcBorderStyle']},
			'padding': {$attrs['bcPadding']}px,
		";

		$block_content = '<div style="'.$divStyles.'">' . $block_content . '</div>';

	}

	// return unmodified block content
	return $block_content;
}

add_filter( 'render_block', 'mc_add_borders', 10, 2 );

//includes

include __DIR__.'/filters.php';
