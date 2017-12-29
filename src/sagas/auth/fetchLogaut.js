import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../../actions';

function* fetchLogaut(){

    console.log('HelloSaga fetchLogaut');

	try {
        //Отправляем запрос на сервер для разлогирования
		//const response = (yield call(axios.post, URL_TO_API, val)).data;

		//Получаем от сервера ответ при успешной авторизации
		console.log('logout');
	} catch (e) {
		console.log(e);
		//yield put({type: "USER_FETCH_FAILED", message: e.message});
	};
};

export default fetchLogaut;