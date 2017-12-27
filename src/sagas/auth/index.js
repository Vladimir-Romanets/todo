import { takeEvery } from 'redux-saga/effects';
import * as types from '../../const/ActionTypes';
import fetchAuthData from './fetchAuthData';


function* auth() {
	yield takeEvery(types.FETCH_AUTHORIZATION_DATA, fetchAuthData);
};

export default auth;