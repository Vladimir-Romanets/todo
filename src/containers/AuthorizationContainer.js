import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { AuthorizationForm } from '../components';

const AuthorizationContainer = (props) => (
	<AuthorizationForm
		parentClass={ props.auth === false ? 'auth-err' : '' }
		onSubmit={ props.fetchAuthorizationData }
	/>
);

const mapStateToProps = state => ({
	auth: state.reducerAuthorization.auth,
	token: state.reducerAuthorization.token
})

const mapDispatchToProps = dispatch => ({
	fetchAuthorizationData: (data) => dispatch( actions.fetchAuthorizationData(data) )
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer);