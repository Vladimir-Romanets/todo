import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../../actions';
import { path } from '../config';

function* fetchLogaut({ data }){

    console.log('HelloSaga fetchLogaut');

	try {
        //Отправляем запрос на сервер для разлогирования
		const { data: response } = yield call(axios.post, `${path}logout`, data);
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