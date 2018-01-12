import { put } from 'redux-saga/effects';
import instance from '../axios';
import actions from '../../actions';

function* fetchStatusChange({ data }) {
    try {
        const { data: response } = yield instance('changestatus', data);
        yield put( actions.statusChangedSuccessful(response.data) );
    } catch (e) {
        console.log('Ошибка сервера', e);
        yield put( actions.popupMessageSet({
            message: 'Ошибка соединения. \n Попробуйте позже.',
            timeout: 3000
        })
    )};
};

export default fetchStatusChange;