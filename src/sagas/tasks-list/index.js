import { takeEvery } from 'redux-saga/effects';
import * as types from '../../const/ActionTypes';
import fetchGetTasksList from './fetchGetTasksList';


function* auth() {
	yield takeEvery(types.FETCH_GET_TASKS_LIST, fetchGetTasksList);
};

export default auth;