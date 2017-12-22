import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import reducerTest from './reducerTest';

export default combineReducers({
//	routing: routerReducer,
    form,
    reducerTest
});