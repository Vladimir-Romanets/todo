import * as types from '../const/ActionTypes';

const initialState = {
    newTasks: [],
    inprocessTasks: [],
    doneTasks: []
};

const reducerTasksList = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TASKS_LIST:
            return {
                ...state,
                ...action.tasksList
            };
        default:
            return state;
    }
};

export default reducerTasksList;