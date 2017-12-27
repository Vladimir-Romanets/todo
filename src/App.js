import React, { Component } from 'react';
import { AuthorizationContainer, DashboardContainer } from './containers';

export const App = () => {
	return (
		<div className="container">
			<AuthorizationContainer />
			<DashboardContainer />
		</div>
	)
};
