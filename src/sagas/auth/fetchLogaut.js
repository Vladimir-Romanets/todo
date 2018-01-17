import { put } from 'redux-saga/effects';
import instance from '../axios';
import actions from '../../actions';

function* fetchLogaut({ data }){
	try {
        //Отправляем запрос на сервер для разлогирования
        yield instance('logout', data);
        sessionStorage.clear();
    } catch (e) {
        yield put(actions.popupMessageSet(e)
    )};
};

export default fetchLogaut;