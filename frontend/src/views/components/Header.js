import React from 'react';
import * as logo from '../../images/logo.svg'

export default function Header() {
	console.log(logo)
	return (
		<div className="brand_logo">
			<img src={logo} alt="Base Apparel" />
		</div>
	);
}