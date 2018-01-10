import types from '../const';

export const popupMessageSet = ( data ) => ({
    type: types.POPUP_MESSAGE_SET,
    data
});

export const popupClose = () => ({
    type: types.POPUP_CLOSE
});