import { put } from 'redux-saga/effects';
import instance from '../axios';
import actions from '../../actions';

function* fetchStatusChange({ data }) {
    try {
        const { data: status } = yield instance('changestatus', data);
        if ( status.changed ){
            yield put( actions.statusChangedSuccessful(data) );
        } else {
            throw new Error('Please re-enter your account');
        };
    } catch (e) {
        yield put(actions.popupMessageSet(e)
    )};
};

export default fetchStatusChange;