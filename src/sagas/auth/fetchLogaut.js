import { put } from 'redux-saga/effects';
import instance from '../axios';
import actions from '../../actions';

function* fetchLogaut({ data }){
	try {
        //Отправляем запрос на сервер для разлогирования
		const { data: response } = yield instance('logout', data);
		console.log('logout', response);
    } catch (e) {
        const message = e.message || 'Ошибка соединения. \n Попробуйте позже.';
        yield put( actions.popupMessageSet({
            message,
            timeout: 3000
        })
    )};
};

export default fetchLogaut;