import React from 'react';

import submit_arrow from '../../images/icon-arrow.svg';

export default function Main() {
	return (
		<main>
			<section className="section__text">
				<h1>
					<span className="heading--light-text">Healme</span> Service
				</h1>
				<p>
					A healer is not someone that you go to for healing. 
					A healer is someone that triggers within you,
					your own ability to heal yourself. <br /> <br />
				</p>
				<form>
					<input type="email" id="email_address" placeholder="Email Address" />
					<button>
						<img src={submit_arrow} alt="Submit arrow" />
					</button>
				</form>
				<p>
				Add your email above to stay up-to-date with our launch.
				</p>
			</section>
		</main>
	);
}
