import React from 'react';
import logo from '../../images/logo.svg'

export default function Header() {
	return (
		<header>
			<div className="brand__logo">
				<img src={logo} alt="Base Apparel" />
			</div>
		</header>
	);
}