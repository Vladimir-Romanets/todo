import { connect } from 'react-redux';
import actions from '../actions';
import { DashBoard } from '../components';

const mapStateToProps = ( state ) => ({
	auth: state.reducerAuthorization.auth,
	login: state.reducerAuthorization.login,
	tasksList: state.reducerTasksList
});

const mapDispatchToProps = ( dispatch ) => ({
	fetchStatusChange: (data) => dispatch(actions.fetchStatusChange(data) ),
	fetchSaveTaskData: (data) => dispatch( actions.fetchSaveTaskData(data) ),
	addTask: (state) => dispatch( actions.addTask(state) ),
	fetchLogout: (data) => dispatch( actions.fetchLogout(data) )
});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);