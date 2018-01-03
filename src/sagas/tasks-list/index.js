import { takeEvery } from 'redux-saga/effects';
import types from '../../const';
import fetchGetTasksList from './fetchGetTasksList';
import fetchStatusChange from './fetchStatusChange';
import fetchSaveTaskData from './fetchSaveTaskData';

export default function* taskList() {
	yield takeEvery( types.FETCH_GET_TASKS_LIST, fetchGetTasksList );
	yield takeEvery( types.FETCH_STATUS_CHANGE, fetchStatusChange );
	yield takeEvery( types.FETCH_SAVE_TASK_DATA, fetchSaveTaskData );
}