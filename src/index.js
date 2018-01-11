import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
//import { store, history } from "./store";
//import ConnectedRouter from 'react-router-redux/ConnectedRouter';

render(
	<Provider store = { store }>
		<App />
	</Provider>,
	document.getElementById('app')
);