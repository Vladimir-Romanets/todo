import { takeEvery } from 'redux-saga/effects';
import types from '../../const';
import getTasksList from './getTasksList';
import fetchStatusChange from './fetchStatusChange';
import fetchSaveTaskData from './fetchSaveTaskData';

export default function* taskList() {
	yield takeEvery( types.GET_TASKS_LIST, getTasksList );
	yield takeEvery( types.FETCH_STATUS_CHANGE, fetchStatusChange );
	yield takeEvery( types.FETCH_SAVE_TASK_DATA, fetchSaveTaskData );
}