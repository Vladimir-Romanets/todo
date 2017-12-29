import { takeEvery } from 'redux-saga/effects';
import * as types from '../../const/ActionTypes';
import fetchAuthData from './fetchAuthData';
import fetchLogaut from './fetchLogaut';


function* auth() {
	yield takeEvery(types.FETCH_AUTHORIZATION_DATA, fetchAuthData);
	yield takeEvery(types.FETCH_LOGOUT, fetchLogaut);
};

export default auth;