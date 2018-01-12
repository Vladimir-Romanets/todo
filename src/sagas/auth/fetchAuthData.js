import { put } from 'redux-saga/effects';
import instance from '../axios';
import actions from '../../actions';

function* fetchAuthData({ data }){
	try {
		const { data: response } = yield instance('auth', data);
		yield put( actions.authResponse(response) );
		if ( response.auth ) {
			sessionStorage.setItem('token', response.token);
			yield put( actions.fetchGetTaskList({user_id: response.user_id}) );
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