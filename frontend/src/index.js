import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import style from "./sass/styles.scss";

import Footer from "./views/components/Footer";
import Header from "./views/components/Header";
// import About from "./views/pages/About";
import reducers from './reducers/mainPage';

const HealmeMainApp = () => {
	return (
		<Provider store={createStore(reducers)}>
			<div className="healme-container">
				<Header />
                <Footer />
			</div>
		</Provider>
	);
};

ReactDOM.render(<HealmeMainApp />, document.getElementById('main'));
