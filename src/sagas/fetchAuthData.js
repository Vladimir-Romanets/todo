import { call, put } from 'redux-saga/effects';
import axios from "axios";

function* fetchAuthData({ data }){

	console.log('HelloSaga', data);

	try {

	} catch (e) {
		console.log(e);
		//yield put({type: "USER_FETCH_FAILED", message: e.message});
	};
};

export default fetchAuthData;