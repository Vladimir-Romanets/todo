import types from '../const';

const initialState = {
    auth: null,
    login: null,
    id: null,
    token: null
};

const reducerAuthorization = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH_RESPONSE:
            return {
                ...state,
                ...action.authData
            };
        case types.FETCH_LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default reducerAuthorization;