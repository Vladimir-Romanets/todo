import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

class App extends Component {
	
	render(){
		return <h1 onClick={ this.props.test }>Hello</h1>
	}
}

const mapStateToProps = state => {
	return state
};

const mapDispatchToProps = dispatch => {
	return {
		test: () => dispatch( actions.test() )
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);