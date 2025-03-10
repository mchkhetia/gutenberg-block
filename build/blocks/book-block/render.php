


<?php
/**
 * Variables WP gives us
 * @var array $attributes Array of block attributes
 * @var string $content The Post content from the save function
 */

use BooksPlugin\BookMeta;

$query = new WP_Query([
	'post_type'      => 'book',
	'orderby'        => 'title',
	'order'          => 'ASC',
]);
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php while ($query->have_posts()) : $query->the_post(); ?>

		<?php
		$authorPublisher   = get_post_meta(get_the_ID(), BookMeta::MC_AUTHOR_PUBLISHER, true);
		$publishedDate     = get_post_meta(get_the_ID(), BookMeta::MC_PUBLISHED_DATE, true);
		$bookPageCount     = get_post_meta(get_the_ID(), BookMeta::MC_PAGE_COUNT, true);
		$bookPrice         = get_post_meta(get_the_ID(), BookMeta::MC_BOOK_PRICE, true);

		$bookCover = get_the_post_thumbnail(null, 'medium');
		$placeholder = '<img src="' . esc_url(get_template_directory_uri() . '/assets/img/placeholder.jpg') . '" alt="No cover available">';
		?>





		<div class="book-container">

		<div class="flip-card">
			<div class="flip-card-inner">
				<div class="flip-card-front">
					<?= $bookCover ? $bookCover : $placeholder; ?>
				</div>
				<div class="flip-card-back" style="background-color: <?= esc_attr($attributes['cardColor']) ?>">
					<h2 class="name" style="color: <?= esc_attr($attributes['headingColor']) ?>"><?= get_the_title(); ?></h2>


					<div class="book-details" style="color: <?= esc_attr($attributes['textColor']) ?>">
						<p><strong>Author / Publisher:</strong> <?= esc_html($authorPublisher); ?></p>
						<p><strong>Published Date:</strong> <?= esc_html($publishedDate); ?></p>
						<p><strong>Page Count:</strong> <?= esc_html($bookPageCount); ?></p>
						<p><strong>Price:</strong> <?= esc_html($bookPrice); ?></p>
					</div>

					<a href="<?= esc_url(get_permalink()); ?>" class="view-details-btn">View Details</a>

				</div>
			</div>
		</div>

	</div>


	<?php endwhile; wp_reset_postdata(); ?>
</div>
