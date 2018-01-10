import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import reducerAuthorization from './reducerAuthorization';
import reducerTasksList from './reducerTasksList';
import popup from './popup';

export default combineReducers({
//	routing: routerReducer,
    form,
    reducerAuthorization,
    reducerTasksList,
    popup
});