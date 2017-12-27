import * as authorization from './authorization';
import * as tasksList from './tasks-list';

const actions = {
    ...authorization,
    ...tasksList
};

export default actions;