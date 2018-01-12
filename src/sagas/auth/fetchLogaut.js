import { put } from 'redux-saga/effects';
import instance from '../axios';
import actions from '../../actions';

function* fetchLogaut({ data }){
	try {
        //Отправляем запрос на сервер для разлогирования
		const { data: response } = yield instance('logout', data);
		console.log('logout', response);
	} catch (e) {
		console.log('Ошибка сервера', e);
		yield put(actions.popupMessageSet({
			message: 'Ошибка соединения. \n Попробуйте позже.',
			timeout: 3000
		})
		)
	};
};

export default fetchLogaut;