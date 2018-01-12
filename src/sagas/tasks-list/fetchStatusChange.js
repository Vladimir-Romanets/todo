import { put } from 'redux-saga/effects';
import instance from '../axios';
import actions from '../../actions';

function* fetchStatusChange({ data }) {
    try {
        const { data: response } = yield instance('changestatus', data);
        yield put( actions.statusChangedSuccessful(response.data) );
    } catch (e) {
        const message = e.message || 'Ошибка соединения. \n Попробуйте позже.';
        yield put( actions.popupMessageSet({
            message,
            timeout: 3000
        })
    )};
};

export default fetchStatusChange;