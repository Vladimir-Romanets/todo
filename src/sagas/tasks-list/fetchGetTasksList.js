import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../../actions';
import { path } from '../config';

function* fetchGetTasksList({ data }) {

    //console.log('HelloSaga fetchGetTasksList', data);

    try {
        //Делаем запрос на сервер для получения списка тасков
        const { data: response } = yield call(axios.post, `${path}gettasklist`, data);
        console.log('HelloSaga fetchGetTasksList', response);

        yield put( actions.setTasksList(response) );
    } catch (e) {
        console.log(e);
        //yield put({type: "USER_FETCH_FAILED", message: e.message});
    };
};

export default fetchGetTasksList;