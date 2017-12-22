import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { AuthorizationForm } from '../components';

class AuthorizationContainer extends Component {
	submit = ( data ) => {
		this.props.fetchAuthorizationData(data);
	}

	render(){
		return <AuthorizationForm onSubmit={ this.submit } />
	}
}

const mapStateToProps = ( state ) => {
	return state
};

const mapDispatchToProps = ( dispatch ) => {
	return {
		fetchAuthorizationData: (data) => dispatch( actions.fetchAuthorizationData(data) )
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer);