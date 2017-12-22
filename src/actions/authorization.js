import * as types from '../const/ActionTypes';

export const fetchAuthorizationData = (data) => {
    return {
        type: types.FETCH_AUTHORIZATION_DATA,
        data
    }
};