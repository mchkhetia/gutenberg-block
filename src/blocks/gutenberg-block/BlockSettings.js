import React from "react";
import { InspectorControls } from "@wordpress/block-editor";
import { ColorPalette, ColorPicker, PanelBody, PanelRow, RangeControl, TextControl, ToggleControl } from "@wordpress/components";
import colors, { getColorClass } from "../../common/colors";

export default function BlockSettings({ attributes, setAttributes }) {
	return (
		<InspectorControls>

			<PanelBody title="Basic" initialOpen={true}>

				<PanelRow>
					<h1>Quote Background Color</h1>
				</PanelRow>
				<PanelRow>
					<ColorPalette
						colors={colors}
						value={attributes.backgroundColor}
						onChange={(backgroundColor) => setAttributes({ backgroundColor })}
					/>
				</PanelRow>

				<PanelRow>
					<h2>Quote Text Color</h2>
				</PanelRow>
				<PanelRow>
					<ColorPicker
						color={attributes.textColor}
						onChangeComplete={({ hex }) => setAttributes({ textColor: hex })}
						enableAlpha={true}
					/>
				</PanelRow>
			</PanelBody>

			<PanelBody title="Font & Spacing" initialOpen={false}>
				<PanelRow>
					<h2>Font Size</h2>
				</PanelRow>
				<PanelRow>
					<RangeControl
						label="Font Size"
						value={attributes.fontSize || 16}
						onChange={(newSize) => setAttributes({ fontSize: newSize })}
						min={10}
						max={40}
					/>
				</PanelRow>

				<PanelRow>
					<h2>Padding</h2>
				</PanelRow>
				<PanelRow>
					<RangeControl
						label="Padding"
						value={attributes.padding || 10}
						onChange={(newPadding) => setAttributes({ padding: newPadding })}
						min={0}
						max={50}
					/>
				</PanelRow>
			</PanelBody>

			<PanelBody title="Button Settings" initialOpen={false}>

				<PanelRow>
					<h2>Show Button</h2>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label="Display Button"
						checked={attributes.showButton}
						onChange={(newValue) => setAttributes({ showButton: newValue })}
					/>
				</PanelRow>

				{attributes.showButton && (
					<PanelRow>
						<TextControl
							label="Button Text"
							value={attributes.buttonText}
							onChange={(newText) => setAttributes({ buttonText: newText })}
							placeholder="Enter button text"
						/>
					</PanelRow>
				)}
			</PanelBody>
		</InspectorControls>
	);
}
