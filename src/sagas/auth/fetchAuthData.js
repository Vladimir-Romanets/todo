import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../../actions';
import { path } from '../config';

function* fetchAuthData({ data }){
	try {
		//Передаем логин/пароль на сервер для авторизации
		const { data: response } = yield call(axios.post, `${path}auth`, data);
		yield put(actions.authResponse(response));
		
		if ( response.auth ) {
			yield put( actions.fetchGetTaskList({
				token: response.token,
				user_id: response.user_id
			}) );
		}
	} catch (e) {
		console.log(e);
		//yield put({type: "USER_FETCH_FAILED", message: e.message});
	};
};

export default fetchAuthData;