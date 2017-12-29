import * as types from '../const/ActionTypes';

export const fetchAuthorizationData = ( data ) => ({
    type: types.FETCH_AUTHORIZATION_DATA,
    data
});

export const authResponse = ( authData ) => ({
    type: types.AUTH_RESPONSE,
    authData
});

export const fetchLogout = () => ({
    type: types.FETCH_LOGOUT
});