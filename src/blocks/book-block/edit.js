import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import BlockSettings from './BlockSettings';
import metadata from "./block.json";
import ServerSideRender from '@wordpress/server-side-render'


export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
				<BlockSettings attributes={attributes} setAttributes={setAttributes} />


			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<img
							src={attributes.bookCover ? attributes.bookCover : attributes.placeholder}
							alt="Book Cover"
						/>
					</div>
					<div className="flip-card-back" style={{ backgroundColor: attributes.cardColor }}>
						<h3 className="name" style={{ color: attributes.headingColor }}>
							Book Title
						</h3>
						<div className="book-details" style={{ color: attributes.textColor }}>

						</div>

						<a href="#" className="view-details-btn">View Details</a>
					</div>
				</div>
			</div>

			<ServerSideRender
				block={metadata.name}
				attributes={attributes}
			/>
		</div>
	);
}
