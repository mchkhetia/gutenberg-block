/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {MediaUpload, RichText, useBlockProps} from '@wordpress/block-editor';
import {Button, ColorPalette} from '@wordpress/components';
import SocialMediaLinks from '../../components/SocialMedia';





/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import BlockSettings from "./BlockSettings";



/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {


	const handleImageSelect = (media) => {
		setAttributes({ image: media.sizes.full.url });
	};

	const handleButtonTextChange = (newButtonText) => {
		setAttributes({ buttonText: newButtonText });
	};

	const handleButtonLinkChange = (newButtonLink) => {
		setAttributes({ buttonLink: newButtonLink });
	};

	const divStyles = {
		backgroundColor: attributes.backgroundColor,
		color: attributes.textColor,
	}

	return (
		<div {...useBlockProps()} style={divStyles}>
			<BlockSettings attributes={attributes} setAttributes={setAttributes} />


				<h1 className={attributes.textColor}>
					<RichText
						tagName="div"
						value={attributes.header}
						onChange={(newHeader) => setAttributes({ header: newHeader })}
						placeholder={__('Enter Name')}
					/>
				</h1>
				<RichText
					className="bio-description"
					tagName="p"
					value={attributes.description}
					onChange={(newDescription) => setAttributes({ description: newDescription })}
					placeholder={__('Enter bio or description')}
				/>

				<div className="bio-image-upload">
					<MediaUpload
						onSelect={handleImageSelect}
						type="image"
						value={attributes.image}
						render={({ open }) => (
							<Button onClick={open}>
								{attributes.image ? 'Change Image' : 'Choose Image'}
							</Button>
						)}
					/>
				</div>
				{attributes.image && <img src={attributes.image} alt="Selected image" />}

				<SocialMediaLinks
					twitter={attributes.twitter}
					linkedin={attributes.linkedin}
					github={attributes.github}
				/>

				<div className="bio-button-container">
					<RichText
						tagName="span"
						value={attributes.buttonText || 'Contact Me'}
						onChange={handleButtonTextChange}
						placeholder="Button Text"
						className="bio-button"
					/>
				</div>
				<input
					type="url"
					value={attributes.buttonLink}
					onChange={(e) => handleButtonLinkChange(e.target.value)}
					placeholder="Button URL"
					className="bio-button-link"
				/>
			</div>

	);
}

