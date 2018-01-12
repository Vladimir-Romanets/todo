import axios from 'axios';
import { path } from './config';

const headers = {
    ['X-Auth-Token']: sessionStorage.getItem('token')
};

const instance = (route, data) => axios.post(`${path}${route}`, data, {headers});

export default instance;