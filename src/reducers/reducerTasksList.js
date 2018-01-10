import types from '../const';

const initialState = {
    newTasks: [],
    inprogressTasks: [],
    completedTasks: []
}; 

const reducerTasksList = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TASKS_LIST:
            return {
                ...state,
                ...action.tasksList
            }
        case types.STATUS_CHANGED_SUCCESSFUL:{
            const { taskID, newState, prevState } = action.data;
            const nextState = {...state };
            nextState[prevState] = state[prevState].filter( (el) => {
                if ( Number(el.id) === Number(taskID) ) {
                    nextState[newState].push(el);
                    return false;
                };
                return true;
            });
            return nextState;
        }
        case types.SAVE_TASK_DATA_SUCCESSFUL:{
            const { data, status } = action;
            const i = state[status].findIndex( (el) => el.id === data.id );
            const newState = { ...state };
            newState[status][i] = data;
            return newState;
        }
        case types.SAVE_NEW_TASK_DATA_SUCCESSFUL:{
            const { data, status } = action;
            const i = state[status].findIndex( (el) => !Number(el.id) );
            const newState = { ...state };
            newState[status][i] = data;
            return newState;
        }
        case types.ADD_TASK:{
            const newState = { ...state };
            newState[action.status].unshift({
                id: action.status,
                title: '',
                description: ''
            });
            return newState;
        }
        case types.FETCH_LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default reducerTasksList;