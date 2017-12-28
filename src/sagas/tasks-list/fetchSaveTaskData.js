import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../../actions';

function* fetchSaveTaskData({ data }) {

    console.log('HelloSaga fetchSaveTaskData', data);

    try {
        //Делаем запрос на сервер для сохранения данных таски
        //const response = (yield call(axios.post, URL_TO_API, val)).data;

        //Получаем от сервера ответ
        const response = true;

        if (response) {
            const status = data.currentState;
            delete data.currentState;
            yield put(actions.saveTaskDataSuccessful(data, status));
        } else {

        };
    } catch (e) {
        console.log(e);
        //yield put({type: "USER_FETCH_FAILED", message: e.message});
    };
};

export default fetchSaveTaskData;