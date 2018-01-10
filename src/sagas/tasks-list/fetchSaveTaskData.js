import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../../actions';
import { path } from '../config';

function* fetchSaveTaskData({ data }) {
    try {
        const { data: response } = yield call(axios.post, `${path}savetaskdata`, data);
        const status = data.currentState;
        if ( Number(data.id) ){
            yield put(actions.saveTaskDataSuccessful(response, status));
        } else {
            yield put(actions.saveNewTaskDataSuccessful(response, status));
        };
    } catch (e) {
        console.log('Ошибка сервера', e);
        yield put(actions.popupMessageSet({
            message: 'Ошибка соединения. \n Попробуйте позже.',
            timeout: 3000
        })
    )};
};

export default fetchSaveTaskData;