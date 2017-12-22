import {takeEvery} from 'redux-saga/effects';

import test from './test';
import * as types from "../const/ActionTypes";

function* sagas() {
	yield takeEvery(types.TEST, test);
};

export default sagas;