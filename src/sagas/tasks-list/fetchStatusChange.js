import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../../actions';
import { path } from '../config';

function* fetchStatusChange({ data }) {

    console.log('HelloSaga fetchStatusChange', data);

    try {
        //Делаем запрос на сервер для изменения статуса таски
        const { data: response } = yield call(axios.post, `${path}changestatus`, data);

        if ( response.status ){
            yield put(actions.statusChangedSuccessful(response.data));
        };
    } catch (e) {
        console.log(e);
        //yield put({type: "USER_FETCH_FAILED", message: e.message});
    };
};

export default fetchStatusChange;