import { put } from 'redux-saga/effects';
import instance from '../axios';
import actions from '../../actions';

function* fetchAuthData({ data }){
	try {
		const { data: response } = yield instance('auth', data);
		yield put( actions.authResponse(response) );
		if ( response.auth ) {
			sessionStorage.setItem('token', response.token);
			yield put( actions.getTasksList({userId: response.id}) );
		}
    } catch (e) {
        yield put(actions.popupMessageSet(e)
    )};
};

export default fetchAuthData;