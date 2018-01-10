import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../../actions';
import { path } from '../config';

function* fetchAuthData({ data }){
	try {
		const { data: response } = yield call(axios.post, `${path}auth`, data);
		yield put(actions.authResponse(response));
		if ( response.auth ) {
			yield put( actions.fetchGetTaskList({
				token: response.token,
				user_id: response.user_id
			}) );
		}
	} catch (e) {
		console.log('Ошибка сервера',e);
		yield put(actions.popupMessageSet({
			message: 'Ошибка соединения. \n Попробуйте позже.',
			timeout: 3000
		})
	)};
};

export default fetchAuthData;