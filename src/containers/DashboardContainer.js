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
		fetchStatusChange: (options) => dispatch(actions.fetchStatusChange(options) ),
		fetchSaveTaskData: (data) => dispatch(actions.fetchSaveTaskData(data)),
		addTask: (state) => dispatch(actions.addTask(state))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);