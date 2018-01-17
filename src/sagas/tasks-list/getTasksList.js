import { put } from 'redux-saga/effects';
import instance from '../axios';
import actions from '../../actions';
import { tasksFormat } from '../../utils';

function* getTasksList({ data }) {
    try {
        const { data: response } = yield instance('tasks', data);
        const tasksList = tasksFormat(response);
        yield put( actions.setTasksList(tasksList) );
    } catch (e) {
        yield put(actions.popupMessageSet(e)
    )};
};

export default getTasksList;