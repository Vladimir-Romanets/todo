import { verify } from 'jsonwebtoken';
import { SECRET } from '../config';

function Exception (err, msg){
    this.status = err;
    this.message = msg;
};

const verifyJWT = ({ ['x-auth-token']: token }) => {
    try {
        verify(token, SECRET);
        return true;
    } catch({e}) {
        throw new Exception(401, 'Uknown user');
    }
};

export default verifyJWT;