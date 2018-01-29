import { put } from 'redux-saga/effects';
import instance from '../axios';
import actions from '../../actions';

function* fetchSaveTaskData({ data }) {
    try {
        const { data: response } = yield instance('savetaskdata', data);
        
        if ( !response ) throw new Error('Please re-enter your account');

        if ( Number(data.id) ){
            yield put( actions.saveTaskDataSuccessful(data) );
        } else {
            yield put( actions.saveNewTaskDataSuccessful(response) );
        };
        
    } catch (e) {
        yield put(actions.popupMessageSet(e)
    )};
};

export default fetchSaveTaskData;