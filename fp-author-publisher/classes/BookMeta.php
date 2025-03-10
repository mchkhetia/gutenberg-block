<?php
namespace BooksPlugin;


/**
 * Boom Meta Class
 */
class BookMeta extends Singleton
{

    /**
     * Publisher
     */
    const MC_AUTHOR_PUBLISHER = 'authorPublisher';

    /**
     * Published date
     */
    const MC_PUBLISHED_DATE = 'authorPublishedDate';

    /**
     * Page Count
     */
    const MC_PAGE_COUNT = 'bookPageCount';

    /**
     * Price of the book
     */
    const MC_BOOK_PRICE = 'bookPrice';


    /**
     * @var
     */
    protected static $instance;

    /**
     * add functionality
     */
    protected function __construct()
    {

        add_action('admin_init', [$this, 'registerMetaBox']);

        add_action( 'save_post_' . BookPostType::POST_TYPE, [$this, 'saveInformation']);

    }

    /**
     * @return void to register book meta box
     */
    public function registerMetaBox(){

        add_meta_box(
            'book_information_meta',
            'Book Information',
            [$this, 'outputAuthorInformation'],
            BookPostType::POST_TYPE,
            'normal');
    }

    /**
     * @return void to outpot book meta box
     */
    public function outputAuthorInformation(){

        $post = get_post();

        $authorPublisher = get_post_meta($post->ID, self::MC_AUTHOR_PUBLISHER, true);

        $authorPublishedDate = get_post_meta($post->ID, self::MC_PUBLISHED_DATE, true);

        $bookPageCount = get_post_meta($post->ID, self::MC_PAGE_COUNT, true);

        $bookPrice =  get_post_meta($post->ID, self::MC_BOOK_PRICE, true);
        ?>

        <form class="main-wrapper">
            <div class="form-group">
                <label for="publisher">Publisher:</label>
                <input type="text" id="publisher" name="authorPublisher" value="<?= $authorPublisher ?>">
            </div>

            <div class="form-group">
                <label for="published-date">Published Date:</label>
                <input type="text" id="published-date" name="authorPublishedDate" value="<?= $authorPublishedDate ?>">
            </div>

            <div class="form-group">
                <label for="page-count">Page Count:</label>
                <input type="text" id="page-count" name="bookPageCount" value="<?= $bookPageCount ?>">
            </div>

            <div class="form-group">
                <label for="price">Price:</label>
                <input type="text" id="price" name="bookPrice" value="<?= $bookPrice ?>">
            </div>
        </form>

        <?php

    }

    /**
     * @return void to save book meta box
     */
    public function saveInformation(){

        //get values from the form
        $authorPublisher = sanitize_text_field($_POST['authorPublisher']);

        $authorPublishedDate = sanitize_text_field($_POST['authorPublishedDate']);

        $bookPageCount = sanitize_text_field($_POST['bookPageCount']);

        $bookPrice = sanitize_text_field($_POST['bookPrice']);

        //get the current post
        $post = get_post();


        //store meta in the database
        update_post_meta($post->ID, self::MC_AUTHOR_PUBLISHER, $authorPublisher);

        update_post_meta($post->ID, self::MC_PUBLISHED_DATE, $authorPublishedDate);

        update_post_meta($post->ID, self::MC_PAGE_COUNT, $bookPageCount);

        update_post_meta($post->ID, self::MC_BOOK_PRICE, $bookPrice);

    }


}