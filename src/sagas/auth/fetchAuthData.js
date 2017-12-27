import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../../actions';

function* fetchAuthData({ data }){

	console.log('HelloSaga', data);

	try {
		//Передаем логин/пароль на сервер для авторизации
		//const response = (yield call(axios.post, URL_TO_API, val)).data;

		//Получаем от сервера ответ при успешной авторизации
		const response = {
			auth: true,
			token: '31cc1f0ca737a62b1f9c35154a1cdb7a'
		};
		if ( response.auth ) {
			yield put( actions.authResponse(response) );
			yield put(actions.fetchGetTaskList() );
		}
	} catch (e) {
		console.log(e);
		//yield put({type: "USER_FETCH_FAILED", message: e.message});
	};
};

export default fetchAuthData;