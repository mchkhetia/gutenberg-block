/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {RichText, useBlockProps} from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({attributes}) {

	const getColorClass = (selectedColor) => {
		switch (selectedColor) {
			case '#A991F7': return 'primary';
			case '#FEC8D8': return 'secondary';
			case '#A7F3D0': return 'accent';
			case '#3D348B': return 'background';
			default: return 'primary';
		}
	};


	return (
		<div {...useBlockProps.save()}>
			<div className={`bio-content ${attributes.color ? getColorClass(attributes.color) : ''}`}>

				<img
					className="bio-image"
					src={attributes.image || 'default-image-url.jpg'}
					alt="Profile image"
				/>

				<h1 className="bio-header">
					<RichText.Content tagName="div" value={attributes.header || 'Default header'} />
				</h1>
				<p className="bio-title">
					<RichText.Content tagName="p" value={attributes.description || 'Default description'} />
				</p>


				{attributes.buttonText && attributes.buttonLink && (
					<a href={attributes.buttonLink} className="bio-button">
						{attributes.buttonText}
					</a>
				)}



		</div>

		</div>
	);
}
