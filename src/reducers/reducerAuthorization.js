import * as types from '../const/ActionTypes';

const initialState = {
    auth: false,
    token: null
};

const reducerAuthorization = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH_RESPONSE:
            return {
                ...state,
                ...action.authData
            };
        default:
            return state;
    }
};

export default reducerAuthorization;