import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { Popup } from '../components';

const PopupContainer = (props) => (
	<Popup
		parentClass={ props.msg.length ? 'show' : 'hide' }
		{ ...props }
	/>
);

const mapStateToProps = state => ({
	msg: state.popup.message,
	timeout: state.popup.timeout
})

const mapDispatchToProps = dispatch => ({
	popupClose: (data) => dispatch( actions.popupClose(data) )
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainer);