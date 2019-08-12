import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import style from "./sass/styles.scss";

import Footer from "./views/components/Footer";
// import About from "./views/pages/About";
// import Reducers from './reducers';

const HealmeMainApp = () => {
	return (
		<Provider>
			<div className="healme-container">
				<h1>Coming Soon</h1>
                <Footer />
			</div>
		</Provider>
	);
};

ReactDOM.render(<HealmeMainApp />, document.getElementById('main'));
