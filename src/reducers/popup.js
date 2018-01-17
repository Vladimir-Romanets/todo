import types from '../const';

const initialState = {
    message: '',
    timeout: 3000
};

const popup = (state = initialState, action) => {
    switch (action.type) {
        case types.POPUP_MESSAGE_SET:{
            const { message = 'Ошибка соединения. \n Попробуйте позже.' } = action.data;
            return {
                ...state,
                message
            };
        }
        case types.POPUP_CLOSE:
            return initialState;
        default:
            return state;
    }
};

export default popup;