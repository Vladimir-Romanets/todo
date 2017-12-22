import { call, put } from 'redux-saga/effects';
import axios from "axios";

function* login({login, password}) {
	const authData = {
		login,
		password
	};

	console.log('HelloSaga', authData)

	try {

	} catch (e) {
		console.log(e);
		//yield put({type: "USER_FETCH_FAILED", message: e.message});
	};
};

export default login;