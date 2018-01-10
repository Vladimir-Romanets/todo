import * as auth from './auth';
import * as dashboard from './dashboard';
import * as popup from './popup';

const types = {
    ...auth,
    ...dashboard,
    ...popup
};

export default types;