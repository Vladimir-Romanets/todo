import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { DashBoard } from '../components';

class DashboardContainer extends Component {
	render(){
        return (
			this.props.auth && <DashBoard { ...this.props } />
		)
	}
};

const mapStateToProps = ( state ) => {
	return {
		auth: state.reducerAuthorization.auth,
		tasksList: state.reducerTasksList
	}
};

const mapDispatchToProps = ( dispatch ) => {
	return {
		//fetchGetTaskList: () => dispatch( actions.fetchGetTaskList() )
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);