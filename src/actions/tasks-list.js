import * as types from '../const/ActionTypes';

export const fetchGetTaskList = () => {
    return {
        type: types.FETCH_GET_TASKS_LIST
    }
};

export const setTasksList = ( tasksList ) => {
    return {
        type: types.SET_TASKS_LIST,
        tasksList
    }
};