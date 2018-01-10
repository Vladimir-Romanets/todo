import types from '../const';

const initialState = {
    message: '',
    timeout: 2000
};

const popup = (state = initialState, action) => {
    switch (action.type) {
        case types.POPUP_MESSAGE_SET:
            return {
                ...state,
                ...action.data
            };
        case types.POPUP_CLOSE:
            return initialState;
        default:
            return state;
    }
};

export default popup;