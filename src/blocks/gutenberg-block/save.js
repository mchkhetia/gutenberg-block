/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {RichText, useBlockProps} from '@wordpress/block-editor';
import SocialMediaLinks from '../../components/SocialMedia';
import color from "@wordpress/block-editor/build/hooks/color";

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


	const divStyles = {
		backgroundColor: attributes.backgroundColor,
		color: attributes.textColor,
	}

	return (
		<div {...useBlockProps.save()} style={divStyles}>
			<div className="bio-content" >
				{attributes.image && (
					<img
						className="bio-image"
						src={attributes.image || 'default-image-url.jpg'}
						alt="Profile image"
					/>
				)}

				<h1 className={attributes.textColor}>
					<RichText.Content tagName="div" value={attributes.header || 'Default header'} />
				</h1>

				<p className="bio-title">
					<RichText.Content tagName="p" value={attributes.description || 'Default description'} />
				</p>

				<SocialMediaLinks
					twitter={attributes.twitter}
					linkedin={attributes.linkedin}
					github={attributes.github}
				/>

				{attributes.showButton && attributes.buttonText && attributes.buttonLink && (
					<a href={attributes.buttonLink} className="bio-button">
						{attributes.buttonText}
					</a>
				)}
			</div>
		</div>
	);
}
