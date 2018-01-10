import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../../actions';
import { path } from '../config';

function* fetchStatusChange({ data }) {
    try {
        const { data: response } = yield call(axios.post, `${path}changestatus`, data);
        yield put(actions.statusChangedSuccessful(response.data));
    } catch (e) {
        console.log('Ошибка сервера', e);
        yield put(actions.popupMessageSet({
            message: 'Ошибка соединения. \n Попробуйте позже.',
            timeout: 3000
        })
    )};
};

export default fetchStatusChange;