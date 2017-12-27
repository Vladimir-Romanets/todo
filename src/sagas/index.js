import { fork } from 'redux-saga/effects';
import auth from './auth/index';
import taskList from './tasks-list';

export default function* sagas() {
	yield fork( auth );
	yield fork( taskList );
};