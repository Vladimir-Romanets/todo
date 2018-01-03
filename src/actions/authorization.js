import types from '../const';

export const fetchAuthorizationData = ( data ) => ({
    type: types.FETCH_AUTHORIZATION_DATA,
    data
});

export const authResponse = ( authData ) => ({
    type: types.AUTH_RESPONSE,
    authData
});

export const fetchLogout = ( data ) => ({
    type: types.FETCH_LOGOUT,
    data
});