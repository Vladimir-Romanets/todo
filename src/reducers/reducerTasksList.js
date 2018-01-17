import types from '../const';

const initialState = {
    recent: [],
    inprogress: [],
    completed: []
}; 

const reducerTasksList = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TASKS_LIST:
            return {
                ...state,
                ...action.tasksList
            }
        case types.STATUS_CHANGED_SUCCESSFUL:{
            const { id, status, prevStatus } = action.data;
            const newEl = state[prevStatus].filter( el => Number(el.id) === Number(id) );
            return {
                ...state,
                [status]: [ ...state[status], ...newEl ],
                [prevStatus]: state[prevStatus].filter( el => Number(el.id) !== Number(id) )
            };
        }
        case types.SAVE_TASK_DATA_SUCCESSFUL:{
            const { data } = action;
            const i = state[data.status].findIndex( (el) => el.id === data.id );
            const newState = {
                ...state,
                [data.status]: [ ...state[data.status] ]
            };
            newState[data.status][i] = { ...data };
            return newState;
        }
        case types.SAVE_NEW_TASK_DATA_SUCCESSFUL:{
            const { data } = action;
            const i = state[data.status].findIndex( (el) => isNaN(el.id) );
            const newState = {
                ...state,
                [data.status]: [ ...state[data.status] ]
            };
            newState[data.status][i] = { ...data };
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