import { put } from 'redux-saga/effects';
import instance from '../axios';
import actions from '../../actions';

function* fetchGetTasksList({ data }) {
    try {
        const { data: response } = yield instance('tasks', data);
        yield put( actions.setTasksList(response) );
    } catch (e) {
        yield put( actions.popupMessageSet({
            message: 'Ошибка соединения. \n Попробуйте позже.',
            timeout: 3000
        })
    )};
};

export default fetchGetTasksList;