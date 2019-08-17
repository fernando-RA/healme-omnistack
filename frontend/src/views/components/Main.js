import React from 'react';
import EmailForm from './EmailForm'

import submit_arrow from '../../images/icon-arrow.svg';

export default function Main() {
	return (
		<main>
			<section className="section__text">
				<h1>
					<span className="heading--light-text">Healme</span> Service
				</h1>
				<p>
					A healer is not someone that you go to for healing. <br />
					A healer is someone that triggers within you, your own ability to heal yourself. <br /> <br />
				</p>
			
				<EmailForm/>
				<p>Add your email above to stay up-to-date with our launch.</p>
			</section>
		</main>
	);
}
