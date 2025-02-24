import React from "react";

export default function SocialMediaLinks({ twitter, linkedin, github }) {
	return (
		<div className="bio-social-links">
			{twitter && <a href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
			{linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
			{github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>}
		</div>
	);
}
