import * as types from '../const/ActionTypes';

export const fetchAuthorizationData = ( data ) => {
    return {
        type: types.FETCH_AUTHORIZATION_DATA,
        data
    }
};

export const authResponse = ( authData ) => {
    return {
        type: types.AUTH_RESPONSE,
        authData
    }
};