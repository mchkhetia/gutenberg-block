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
import { useState } from 'react';
import {Button, ColorPalette} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';



/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {

	const [color, setColor] = useState('#A991F7');
	const [image, setImage] = useState(null);
	const [text, setText] = useState('Some text');

	const colors = [
		{ name: 'Primary', color: '#A991F7' },
		{ name: 'Secondary', color: '#FEC8D8' },
		{ name: 'Accent', color: '#A7F3D0' },
		{ name: 'Background', color: '#3D348B' },
		{ name: 'Text', color: '#E0E7FF' },
		{ name: 'Button', color: '#F9A8D4' },
		{ name: 'Border', color: '#C4B5FD' },
		{ name: 'Gradient Start', color: '#6A5ACD' },
		{ name: 'Gradient End', color: '#FFB6C1' },
	];

	const getColorClass = (selectedColor) => {
		switch (selectedColor) {
			case '#A991F7': return 'primary';
			case '#FEC8D8': return 'secondary';
			case '#A7F3D0': return 'accent';
			case '#3D348B': return 'background';
			default: return 'primary';
		}
	};

	const getButtonClass = (selectedColor) => {
		return selectedColor === '#fff' ? 'white-button' : '';
	};

	const handleImageSelect = (media) => {
		setImage(media.sizes.full.url);
	};

	return (
		<div { ...useBlockProps() }>
			<ColorPalette
				colors={colors}
				value={color}
				onChange={(color) => setColor(color)}
			/>

			<div className={`hero-content ${getColorClass(color)}`}>
				<h1 className={color === '#fff' ? 'white-text' : ''}>
					<RichText
						tagName="span"
						value={text}
						onChange={(newText) => setText(newText)}
						placeholder={__('Enter Banner Text')}
					/>
				</h1>
				<p> <RichText
					tagName="p"
					value={text}
					onChange={(newText) => setText(newText)}
					placeholder={__('Some description or text')}
				/></p>

				{/*<a href="#" className={`hero-button ${getButtonClass(color)}`}>*/}
				{/*	Button*/}
				{/*</a>*/}

				<MediaUpload
					onSelect={handleImageSelect}
					type="image"
					value={image}
					render={({ open }) => (
						<Button onClick={open}>
							{image ? 'Change Image' : 'Choose Image'}
						</Button>
					)}
				/>
				{image && <img src={image} alt="Selected image" />}
			</div>
		</div>
	);
}
