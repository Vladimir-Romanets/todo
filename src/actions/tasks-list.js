import types from '../const';

export const getTasksList = (data) => ({
    type: types.GET_TASKS_LIST,
    data
});

export const setTasksList = ( tasksList ) => ({
    type: types.SET_TASKS_LIST,
    tasksList
});

export const fetchStatusChange = ( data ) => ({
    type: types.FETCH_STATUS_CHANGE,
    data
});

export const statusChangedSuccessful = ( data ) => ({
    type: types.STATUS_CHANGED_SUCCESSFUL,
    data
});

export const fetchSaveTaskData = ( data ) => ({
    type: types.FETCH_SAVE_TASK_DATA,
    data
});

export const saveTaskDataSuccessful = ( data ) => ({
    type: types.SAVE_TASK_DATA_SUCCESSFUL,
    data
});

export const saveNewTaskDataSuccessful = ( data, status ) => ({
    type: types.SAVE_NEW_TASK_DATA_SUCCESSFUL,
    data,
    status
})

export const addTask = ( status ) => ({
    type: types.ADD_TASK,
    status
});