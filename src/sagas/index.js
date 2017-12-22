import { takeEvery } from 'redux-saga/effects';
import * as types from "../const/ActionTypes";
import fetchAuthData from './fetchAuthData';


function* sagas() {
	yield takeEvery(types.FETCH_AUTHORIZATION_DATA, fetchAuthData);
};

export default sagas;