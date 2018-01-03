import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { AuthorizationForm } from '../components';

const AuthorizationContainer = (props) => (
	<AuthorizationForm onSubmit={ props.fetchAuthorizationData } />
);

const mapDispatchToProps = ( dispatch ) => ({
	fetchAuthorizationData: (data) => dispatch( actions.fetchAuthorizationData(data) )
});

export default connect(null, mapDispatchToProps)(AuthorizationContainer);