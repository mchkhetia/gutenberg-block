import { PanelBody, ColorPalette } from '@wordpress/components';
import {InspectorControls} from "@wordpress/block-editor";

export default function BlockSettings({ attributes, setAttributes }) {
	const onChangeCardColor = (value) => setAttributes({ cardColor: value });
	const onChangeHeadingColor = (value) => setAttributes({ headingColor: value });
	const onChangeTextColor = (value) => setAttributes({ textColor: value });


	return (

		<InspectorControls>
		<PanelBody title="Book Settings" initialOpen={true}>
			<h2> Card Background Color</h2>
			<ColorPalette
				label="Card Background Color"
				value={attributes.cardColor}
				onChange={onChangeCardColor}
			/>

			<h2> Heading Color</h2>
			<ColorPalette
				label="Heading Color"
				value={attributes.headingColor}
				onChange={onChangeHeadingColor}
			/>
			<h2> Text Color</h2>
			<ColorPalette
				label="Text Color"
				value={attributes.textColor}
				onChange={onChangeTextColor}
			/>
		</PanelBody>
		</InspectorControls>
	);
}
