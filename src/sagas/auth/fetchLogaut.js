import { call } from 'redux-saga/effects';
import axios from 'axios';
import { path } from '../config';

function* fetchLogaut({ data }){

    console.log('HelloSaga fetchLogaut');

	try {
        //Отправляем запрос на сервер для разлогирования
		const { data: response } = yield call(axios.post, `${path}logout`, data);

		//Получаем от сервера ответ при успешной авторизации
		console.log('logout', response);
	} catch (e) {
		console.log(e);
		//yield put({type: "USER_FETCH_FAILED", message: e.message});
	};
};

export default fetchLogaut;