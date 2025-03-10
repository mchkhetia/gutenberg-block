<?php
namespace BooksPlugin;

/**
 * Review Post Type Class
 */
class ReviewPostType extends Singleton
{
    const REVIEW_TYPE = 'review';
    protected static $instance;

    protected function __construct()
    {
        add_action('init', [$this, 'reviewPostType'], 0);
        add_filter('the_content', [$this, 'reviewContentTemplate']);
        add_shortcode('random_review', [$this, 'displayRandomReview']);
    }

    function reviewPostType()
    {
        $labels = array(
            'name'                  => _x('Reviews', 'Post Type General Name', TEXT_DOMAIN),
            'singular_name'         => _x('Review', 'Post Type Singular Name', TEXT_DOMAIN),
            'menu_name'             => __('Review Types', TEXT_DOMAIN),
            'all_items'             => __('All Reviews', TEXT_DOMAIN),
            'add_new_item'          => __('Add New Review', TEXT_DOMAIN),
            'edit_item'             => __('Edit Review', TEXT_DOMAIN),
            'view_item'             => __('View Review', TEXT_DOMAIN),
            'search_items'          => __('Search Review', TEXT_DOMAIN),
            'not_found'             => __('Not found', TEXT_DOMAIN),
            'has_archive'           => true,
        );

        $args = array(
            'label'                 => __('Review', TEXT_DOMAIN),
            'description'           => __('Displays reviews published by Emily Henry', TEXT_DOMAIN),
            'labels'                => $labels,
            'supports'              => array('title', 'editor'),
            'public'                => true,
            'menu_icon'             => 'dashicons-format-quote',
        );
        register_post_type(self::REVIEW_TYPE, $args);
    }

    public function reviewContentTemplate($content)
    {
        $postReview = get_post();
        if ($postReview->post_type == self::REVIEW_TYPE) {
            $reviewName = get_post_meta($postReview->ID, ReviewMeta::MC_REVIEW_NAME, true);
            $reviewLocation = get_post_meta($postReview->ID, ReviewMeta::MC_REVIEW_LOCATION, true);
            $reviewRating = get_post_meta($postReview->ID, ReviewMeta::MC_REVIEW_RATING, true);
            $stars = $this->generateStars($reviewRating);

            $content .= "<div class='review-meta'>
                            <p><strong>Name:</strong> $reviewName</p>
                            <p><strong>Location:</strong> $reviewLocation</p>
                            <p><strong>Rating:</strong> $stars</p>
                        </div>";
        }
        return $content;
    }

    public function displayRandomReview($randomReview)
    {
        $query = new \WP_Query([
            'post_type'      => self::REVIEW_TYPE,
            'orderby'        => 'rand',
            'posts_per_page' => 1,
        ]);

        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $postReview = get_post();
                $reviewName = get_post_meta($postReview->ID, ReviewMeta::MC_REVIEW_NAME, true);
                $reviewLocation = get_post_meta($postReview->ID, ReviewMeta::MC_REVIEW_LOCATION, true);
                $reviewRating = get_post_meta($postReview->ID, ReviewMeta::MC_REVIEW_RATING, true);
                $stars = $this->generateStars($reviewRating);
                $review = get_the_content();

                $randomReview = "<div class='random-review'>
                    <div class='review-content'>
                        <p class='review-text'>$review</p>
                    </div>
                    <div class='review-meta'>
                        <div class='reviewer-info'>
                            <p><strong>Name:</strong> <span class='reviewer-name'>$reviewName</span></p>
                            <p><strong>Location:</strong> <span class='reviewer-location'>$reviewLocation</span></p>
                        </div>
                        <div class='review-rating'>
                            <p><strong>Rating:</strong> <span class='rating-stars'>$stars</span></p>
                        </div>
                    </div>
                </div>";
            }
            wp_reset_postdata();
        }
        return $randomReview;
    }

    private function generateStars($rating)
    {
        $stars = '';
        for ($i = 1; $i <= 5; $i++) {
            if ($i <= $rating) {
                $stars .= "<span class='dashicons dashicons-star-filled'></span>";
            } else {
                $stars .= "<span class='dashicons dashicons-star-empty'></span>";
            }
        }
        return $stars;
    }
}
