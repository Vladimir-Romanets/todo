import { takeEvery } from 'redux-saga/effects';
import types from '../../const';
import fetchAuthData from './fetchAuthData';
import fetchLogaut from './fetchLogaut';


export default function* auth() {
	yield takeEvery(types.FETCH_AUTHORIZATION_DATA, fetchAuthData);
	yield takeEvery(types.FETCH_LOGOUT, fetchLogaut);
}