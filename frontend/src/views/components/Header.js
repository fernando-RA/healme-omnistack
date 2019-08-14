import React from 'react';
import logoURL from '../../images/logo.svg';

export default function Header() {
	console.log(logoURL)
	return (
		<div className="brand_logo">
			<img src={logoURL} alt="Base Apparel" />
		</div>
	);
}