import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../../actions';
import { path } from '../config';

function* fetchAuthData({ data }){

	console.log('HelloSaga fetchAuthData', data);

	try {
		//Передаем логин/пароль на сервер для авторизации
		const { data: response } = yield call(axios.post, `${path}auth`, data);
		console.log(response);

		if ( response.auth ) {
			yield put(actions.authResponse(response) );
			yield put(actions.fetchGetTaskList({
				token: response.token,
				login: response.login
			}) );
		}
	} catch (e) {
		console.log(e);
		//yield put({type: "USER_FETCH_FAILED", message: e.message});
	};
};

export default fetchAuthData;