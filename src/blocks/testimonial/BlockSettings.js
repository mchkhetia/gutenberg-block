import React from "react";
import {InspectorControls} from "@wordpress/block-editor";
import {PanelBody, PanelRow} from "@wordpress/components";

export default function BlockSettings() {
	return (
		<InspectorControls>
			<PanelBody title="Basic" initialOpen={true}>
				<PanelRow>
					Starter Demo!
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	)
}
