import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../../actions';

function* fetchStatusChange({ options }) {

    console.log('HelloSaga fetchStatusChange', options);

    try {
        //Делаем запрос на сервер для изменения статуса таски
        //const response = (yield call(axios.post, URL_TO_API, val)).data;

        //Получаем от сервера ответ
        const response = true;

        if ( response ){
            yield put(actions.statusChangedSuccessful(options));
        } else {

        };
    } catch (e) {
        console.log(e);
        //yield put({type: "USER_FETCH_FAILED", message: e.message});
    };
};

export default fetchStatusChange;