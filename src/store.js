import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas/index';
//import createHistory from 'history/createBrowserHistory';
//import { routerMiddleware } from 'react-router-redux';


//export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
//const historyMiddleware = routerMiddleware(history);

export const store = createStore(
		reducers,
		applyMiddleware(
			logger,
			sagaMiddleware,
			//historyMiddleware
		)
	);

sagaMiddleware.run(sagas);