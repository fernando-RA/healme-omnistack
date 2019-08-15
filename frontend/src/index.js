import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import style from "./sass/styles.scss";

import Footer from "./views/components/Footer";
import Header from "./views/components/Header";
import Main from "./views/components/Main";

// import About from "./views/pages/About";
import reducers from './reducers/mainPage';

const HealmeMainApp = () => {
	return (
		<Provider store={createStore(reducers)}>
			<div className="grid__wrapper">
				<Header />
				<section className="section__image"></section>
				<Main />
                <Footer />
			</div>
		</Provider>
	);
};

ReactDOM.render(<HealmeMainApp />, document.getElementById('main'));
