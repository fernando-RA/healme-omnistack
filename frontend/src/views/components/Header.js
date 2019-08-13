import React from 'react';

export default function Header() {
	const logoURL = '/frontend/assets/images/logo.svg';
	return (
		<div className="brand_logo">
			<img src={logoURL} alt="Base Apparel" />
		</div>
	);
}
