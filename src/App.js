import React from 'react';
import { connect } from 'react-redux';
import { AuthorizationContainer, DashboardContainer } from './containers';

const App = (props) => (
		<div className='container'>
			{ props.auth ? <DashboardContainer /> : <AuthorizationContainer /> }
		</div>
);

const mapStateToProps = (state) => ({ ...state.reducerAuthorization });

export default connect(mapStateToProps)(App);
