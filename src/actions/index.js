import * as authorization from './authorization';
import * as tasksList from './tasks-list';
import * as popup from './popup';

const actions = {
    ...authorization,
    ...tasksList,
    ...popup
};

export default actions;