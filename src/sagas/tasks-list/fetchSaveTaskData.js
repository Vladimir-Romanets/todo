import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../../actions';
import { path } from '../config';

function* fetchSaveTaskData({ data }) {

    console.log('HelloSaga fetchSaveTaskData', data);

    try {
        //Делаем запрос на сервер для сохранения данных таски
        const { data: response } = yield call(axios.post, `${path}savetaskdata`, data);
        const status = data.currentState;
        if ( Number(data.id) ){
            yield put(actions.saveTaskDataSuccessful(response, status));
        } else {
            yield put(actions.saveNewTaskDataSuccessful(response, status));
        };
    } catch (e) {
        console.log(e);
        //yield put({type: "USER_FETCH_FAILED", message: e.message});
    };
};

export default fetchSaveTaskData;