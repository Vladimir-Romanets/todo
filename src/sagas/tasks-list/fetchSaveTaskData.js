import { put } from 'redux-saga/effects';
import instance from '../axios';
import actions from '../../actions';

function* fetchSaveTaskData({ data }) {
    try {
        const { data: response } = yield instance('savetaskdata', data);
        const status = data.currentState;

        if ( Number(data.id) ){
            yield put(actions.saveTaskDataSuccessful(response, status));
        } else {
            yield put(actions.saveNewTaskDataSuccessful(response, status));
        };
        
    } catch (e) {
        const message = e.message || 'Ошибка соединения. \n Попробуйте позже.';
        yield put( actions.popupMessageSet({
            message,
            timeout: 3000
        })
    )};
};

export default fetchSaveTaskData;