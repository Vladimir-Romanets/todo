import * as types from '../const/ActionTypes';

const initialState = {
	test: false
};

const reducerTest = (state = initialState, action) => {
	switch (action.type){
		case types.TEST:
			return {
				...state,
				test: true
			};
		default:
			return state;
	}
};

export default reducerTest;