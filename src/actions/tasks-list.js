import * as types from '../const/ActionTypes';

export const fetchGetTaskList = () => ({
    type: types.FETCH_GET_TASKS_LIST
});

export const setTasksList = ( tasksList ) => ({
    type: types.SET_TASKS_LIST,
    tasksList
});

export const fetchStatusChange = ( options ) => ({
    type: types.FETCH_STATUS_CHANGE,
    options
});

export const statusChangedSuccessful = ( options ) => ({
    type: types.STATUS_CHANGED_SUCCESSFUL,
    options
});

export const fetchSaveTaskData = ( data ) => ({
    type: types.FETCH_SAVE_TASK_DATA,
    data
});

export const saveTaskDataSuccessful = ( data, status ) => ({
    type: types.SAVE_TASK_DATA_SUCCESSFUL,
    data,
    status
});

export const addTask = ( status ) => ({
    type: types.ADD_TASK,
    status
});